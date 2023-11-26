import Stripe from "stripe";

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
}