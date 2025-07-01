import Stripe from "stripe";
import { AkubSpace, Buka, Business, Invoice, Status } from "..";
import { CustomError, TaxBehavior } from "labs-sharable";

/**
 * Service class for stripe service
 */
export class StripeHandle {
  key: string;
  readonly stripe: Stripe;

  /**
   * Class main constructor
   * @param {string} apikey initialize with stripe keys
   */
  constructor(apikey:string) {
    this.key = apikey;
    this.stripe = new Stripe(this.key, {
      apiVersion: "2022-08-01",
    });
  }

  /**
   * Callable function to retrieve stripe customer
   * @param {string} customerID query customer id
   * @return {Promise<Stripe.Response<Stripe.Customer |
   *  Stripe.DeletedCustomer>>}
   returns stripe customer
  */
  public async getCustomer(customerID: string):
    Promise<Stripe.Response<Stripe.Customer |
      Stripe.DeletedCustomer>> {
    const customer = await this.stripe.customers.retrieve(
      customerID
    );
    return customer;
  }

  public async manageCustomer(email: string): Promise<Stripe.Customer |
    Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>> {
    const found = await this.findCustomer(email);
    if (found) {
      return found;
    } else {
      const params: Stripe.CustomerCreateParams = {
        description: "Created on payment action",
        email: email,
      };
      return await this.stripe.customers.create(params);
    }
  }

  /**
   * Create a stripe customer
   * @param {string} email customer email
   * @param {string} name partner name
   * @return {Promise<Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>>} returns customer
   */
  public async createPartnerCustomer(email: string, name: string):
    Promise<Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>> {
    const params: Stripe.CustomerCreateParams = {
      description: "akub partner account",
      email: email,
      name: name,
    };
    return await this.stripe.customers.create(params);
  }

  /**
  * Callable function to find and retrieve stripe customer using email
  * @param {string} email query email to find
  * @return {Promise<Stripe.Customer | undefined>}
   returns stripe customer
  */
  public async findCustomer(email: string):
    Promise<Stripe.Customer | undefined> {
    const customers = await this.stripe.customers.list({
      limit: 2,
      email: email,
    });
    if (customers.data.length < 1) return;
    return customers.data[0];
  }

  /**
  * Create an Invoice Item with the Price, and Customer you want to charge
  * @param {string} price price data amount
  * @param {string} product stripe product data ID for the price item
  * @param {string} currency price currency
  * @param {boolean} includeTax let us know if the price is tax inclusive
  * @return {Promise<Stripe.Response<Stripe.Price>>}
  returns stripe invoice item
  */
  public async createPriceData(price: number,
    product: string, currency: string, includeTax = true):
    Promise<Stripe.Response<Stripe.Price>> {
    const data = await this.stripe.prices.create({
      unit_amount: Math.round(price) * 100,
      currency: currency.toLowerCase(),
      tax_behavior: includeTax ? "inclusive" : "exclusive",
      product: product,
    });

    return data;
  }

  /**
  * Retrieve a stripe payment link
  * @param {string} link payment link id
  * @return {Promise<Stripe.Response<Stripe.PaymentLink>>}
   returns stripe invoice
  */
  public async getPaymentLink(link: string):
    Promise<Stripe.Response<Stripe.PaymentLink>> {
    return await this.stripe.paymentLinks.retrieve(link);
  }

  /**
  * Retrieve a stripe payment session from checkout
  * @param {string} checkout payment link id
  * @return {Promise<Stripe.Response<Stripe.Checkout.Session>>}
   returns stripe invoice
  */
  public async getCheckoutSession(checkout: string):
    Promise<Stripe.Response<Stripe.Checkout.Session>> {
    return await this.stripe.checkout.sessions.retrieve(
      checkout
    );
  }


  /**
  * Retrieve a stripe payment method
  * @param {string} customer what stripe customer
  * @param {string} method what stripe customer payment method
  * @return {Promise<Stripe.Response<Stripe.PaymentMethod>>}
   returns stripe invoice
  */
  public async getPaymentMethod(customer: string,
    method: string):
    Promise<Stripe.Response<Stripe.PaymentMethod>> {
    return await this.stripe.customers.
      retrievePaymentMethod(customer, method);
  }


  /**
  * Get stripe payment methods
  * @param {string} id stripe account
  * @param {PaymentTypes} type stripe payment method type
  * @return {Promise<Stripe.Response<Stripe.ApiList<Stripe.PaymentMethod>>>}
   returns stripe invoice
  */
  public async getPaymentMethods(id: string, type: Stripe.PaymentMethodListParams.Type = "card")
    : Promise<Stripe.Response<Stripe.ApiList<Stripe.PaymentMethod>>> {
    return await this.stripe.paymentMethods.list({
      customer: id,
      type: type,
    });
  }

  /**
  * Retrieve a stripe payment intent
  * @param {string} id intent string
  * @return {Promise<Stripe.Response<Stripe.PaymentIntent>>}
   returns stripe invoice
  */
  public async paymentIntentData(id: string):
    Promise<Stripe.Response<Stripe.PaymentIntent>> {
    return await this.stripe.paymentIntents.retrieve(id);
  }


  public async checkout(params: {
    currency?: string,
    product?: string,
    email?: string,
    amount: number;
    customer: string,
    lineItems?: { price: string, quantity: number }[],
    redirects: { success: string, cancel: string },
    intent?: Stripe.Checkout.SessionCreateParams.PaymentIntentData,
    billing?: "auto" | "required",
    mode: "setup" | "payment" | "subscription"
  }) {

    const price = await this.stripe.prices.create({
      unit_amount: Math.round(params.amount) * 100,
      currency: (params.currency ?? 'USD').toLowerCase(),
      tax_behavior: "exclusive",
      product: params.product,
    });

    return await this.stripe.checkout.sessions.create({
      mode: params.mode,
      currency: params.currency,
      customer: params.customer,
      line_items: params.lineItems ?? [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      success_url: params.redirects.success,
      cancel_url: params.redirects.cancel,
      payment_intent_data: params.intent ?? {
        setup_future_usage: "off_session",
        receipt_email: params.email,
      },
      automatic_tax: {
        enabled: true,
      },
      customer_update: {
        address: "auto",
        shipping: "auto",
      },
      billing_address_collection: params.billing ?? 'auto'
    });
  }

  /**
   * Callable function to retrieve stripe connect user
   * @param {string} customerID query customer id
   * @return {Promise<Stripe.Response<Stripe.Account>>}
  */
  public async getConnectUser(customerID: string):
    Promise<Stripe.Response<Stripe.Account>> {
    const customer = await this.stripe.accounts.retrieve(
      customerID
    );
    return customer;
  }

  /**
 * Initiates a checkout session for processing payments.
 *
 * @param {Object} params - The parameters for the checkout session.
 * @param {string} params.currency - The currency in which the payment is to be made.
 * @param {string} params.product - The product identifier for which the payment is being made.
 * @param {string} params.email - The email address to which the receipt will be sent.
 * @param {number} params.amount - The amount to be charged, in the smallest currency unit.
 * @param {number} params.fee - The application fee amount to be charged, in the smallest currency unit.
 * @param {Object} params.redirects - URLs to redirect to after payment success or failure.
 * @param {string} params.redirects.success - The URL to redirect to after a successful payment.
 * @param {string} params.redirects.failed - The URL to redirect to after a failed payment.
 * @param {string} params.connectID - ID of the connected account on behalf of which the payment is taken.
 *
 * @return {Promise<Stripe.Response<Stripe.Checkout.Session>>} A promise that resolves to the created checkout session object.
 */
  public async connectCheckout({ currency, amount, fee, redirects, connectID, product, email }: {
    currency: string;
    product: string;
    email: string;
    amount: number;
    fee: number;
    redirects: {
      success: string;
      failed: string;
    },
    /**
     * ID of connected account -- we are taking payments on behalf
     */
    connectID: string;
  }): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    const price = await this.stripe.prices.create({
      unit_amount: Math.round(amount) * 100,
      currency: currency.toLowerCase(),
      tax_behavior: "exclusive",
      product: product,
    });
    return await this.stripe.checkout.sessions.create({
      mode: "payment",
      currency: currency,
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      success_url: redirects.success,
      cancel_url: redirects.failed,
      payment_intent_data: {
        setup_future_usage: "off_session",
        application_fee_amount: fee,
        transfer_data: {
          destination: connectID,
        },
        receipt_email: email,
      },
      billing_address_collection: "auto",
    });
  }


  /**
  * Cancel a stripe payment link
  * @param {string} id what stripe link
  * @return {
  * Promise<Stripe.Response<Stripe.PaymentLink>>
  * }returns stripe invoice
  */
  public async cancelPayLink(id: string):
    Promise<Stripe.Response<Stripe.PaymentLink>> {
    return await this.stripe.paymentLinks.update(
      id,
      { active: false }
    );
  }



  /**
  * Refund a stripe payment
  * @param {string} checkout checkout ID from session
  * @param {number} amount stripe account
  * @return {Promise<Stripe.Response<Stripe.Refund> | undefined>}
   returns stripe refund object
  */
  public async refund(checkout: string,
    amount?: number):
    Promise<Stripe.Response<Stripe.Refund> | undefined> {
    const session = await this.getCheckoutSession(checkout);
    const intent = session.payment_intent;

    if (!intent) return;

    const refund = await this.stripe.refunds.create({
      payment_intent: intent as string,
      amount: amount,
    });
    return refund;
  }


  /**
  * Update default payment method
  * @param {string} id stripe account
  * @return {Promise<Stripe.Response<Stripe.Customer> | undefined>}
   returns stripe invoice
  */
  public async updateDefaultPaymentMethod(id: string):
    Promise<Stripe.Response<Stripe.Customer> | undefined> {
    const account = await this.getCustomer(id);

    if (account.deleted) return;

    if (account.invoice_settings.default_payment_method !== null) {
      console.log("Account already has a default payment method");
      return account;
    }
    const paymentMethods = await this.getPaymentMethods(id);
    if ((paymentMethods).data.length < 1) return;
    // / grab the payment method from the retrieved
    // try setting a new payment method
    const updatedData = await this.stripe.customers.update(
      id,
      {
        invoice_settings: {
          default_payment_method: (paymentMethods).data[0].id,
        },
      }
    );

    return updatedData;
  }

  /**
   * Create stripe payment link
   * @param {Record<string, unknown>} action link actions
   * @return {Promise<Stripe.Response<Stripe.PaymentLink>>} request data
   */
  public async paymentLink(action: {
    invoice: Invoice, product: string, org: Business,
    test: boolean,
  }) {
    if (action.org.providers?.stripe === undefined) {
      throw new CustomError(
        "Your organisation needs to setup payment collection.");
    }

    const amount = action.invoice.subtotal;
    const price = await this.createPriceData(
      amount, action.product,
      action.invoice.currency,
      action.invoice.taxBehavior === TaxBehavior.Inclusive,
    );

    const fee = action.invoice.subtotal * Buka.charge; // 10% of amount

    const link = await this.stripe.paymentLinks.create({
      line_items: [{ price: price.id, quantity: 1 }],
      after_completion: {
        type: "redirect",
        redirect: {
          url: AkubSpace.helpers.buildPaymentRedirect(
            action.invoice.invoiceID,
            Status.Completed, action.test,
          ),
        },
      },
      application_fee_amount: (Math.round(fee)) * 100,
      transfer_data: action.org.providers ? {
        destination: (action.org.test ?
          action.org.providers.stripe.testID :
          action.org.providers.stripe.id) ?? "",
      } : undefined,
    });
    return link;
  }
}