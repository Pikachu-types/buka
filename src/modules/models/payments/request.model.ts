import { plainToInstance, Expose } from "class-transformer";
import { TaxBehavior } from "labs-sharable";
import {
  InvoiceAddress,
  InvoiceItems,
} from "../../interfaces/documents";
import { DocumentTypes, Status } from "../../enums/documents";
import { OrganisationData } from "../clients";
import { v1 as uuidv1 } from "uuid";

export namespace PaymentRequest {
  /**
   * payment provider interface i.e stripe, tink, swish, aza
   */
  export interface PaymentProvider {
    identifier: string;
    link: string;
    provider: string;
  }

  /**
   * user
   */
  export interface Customer {
    name: string;
    address: string;
    country: string;
    vat?: string;
    id?: string;
    email: string;
    mobile: string;
  }


  export const isPaymentRequest = (value: IncomingRequest):
    value is IncomingRequest => !!value?.client && !!value?.currency;
  
  /**
   * user
   */
  export interface IncomingRequest {
    /**
     * Connect business shipping details
     */
    organisation: InvoiceAddress;
    /**
     * Amount paid
     */
    paid: number;
    /**
     * Date created
     */
    created?: number;
    /**
     * Date due
     */
    due: number;
    /**
     * VAT if applicable
     */
    vat: number;
    /**
     * Connected business id
     */
    client: string;
    /**
     * If this payment is to be attributed to some other collection i.e booking 
     */
    identifier?: string;
    /**
     * Add footer if needed
     */
    footer?: string;
    /**
     * tax behaviour -- inclusive or exclusive
     */
    taxBehaviour: TaxBehavior;
    /**
     * Payee details
     */
    customer: Customer;
    /**
     * Line items
     */
    items: InvoiceItems[];
    /**
     * Reference detail for payee
     */
    reason: string;
    /**
     * Invoice currency
     */
    currency: string;

    test: boolean;
  }

  

  export class Model {
    /* eslint new-cap: ["error", { "capIsNew": false }]*/
    /**
     * Document ID {payment_{id}}
     */
    @Expose() id = "";
    /**
     * Client ID ie. client_{id} 
     */
    @Expose() client = "";
    /**
     * Timestamp of creation
     */
    @Expose() created = 0;

    @Expose() lut = 0;
    /**
     * When was it paid
     */
    @Expose() paidAt: number | undefined;
    /**
     * Timestamp of expiration
     */
    @Expose() due = 0;
    
    @Expose() vat = 0;
    /**
     * Charge currency
     */
    @Expose() currency = "";
    /**
     * Amount chargeable
     */
    @Expose() amount = 0;

    /**
     * if inclusive or exclusive
     */
    @Expose() taxBehavior: undefined | TaxBehavior;

    /**
     * Invoice items
     */
    @Expose() items: undefined | InvoiceItems[];

    /**
     * Payment providers
     */
    @Expose() providers: undefined | PaymentProvider[];

    /**
     * If this payment is to be attributed to some other collection i.e booking 
     */
    @Expose() identifier: string | undefined;

    /**
     * Status of payment
     */
    @Expose() status = Status.Unpaid;

    /**
     * This is like a reference of payment. It helps the payee know what they are about to pay for
     */
    @Expose() reason = "";

    /**
     * Who is about to pay? This is now depreciated
     * Use customer instead!!!
     */
    @Expose() user: undefined | Customer;

    /**
     * This is the new model for taking over user reference that existed before
     * I will write an backend alg to resolve this changes
     */
    @Expose() customer: undefined | Customer;

    /**
     * Test payment or not
     */
    @Expose() test = false;
    
    /**
     * Incoming request in encrypted string for ease of receipt generation
     */
    @Expose() request: string | undefined;

    clientData: OrganisationData | undefined;

    /**
     * Change record to Model class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {Model} this class
     */
    public static fromJson(obj: Record<string, unknown>)
      : Model {
      const result: Model = plainToInstance(Model, obj,
        { excludeExtraneousValues: true });
      if (result.items !== undefined) {
        result.items = JSON.parse(JSON.stringify(result.items));
      }
      return result;
    }


    /**
     * Helper class function to find one specific object based on id
     *
     * @param {Model[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {Model | undefined} found object else undefined
     */
    public static findOne(list: Model[], id: string)
      : Model | undefined {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) return list[i];
      }
      return;
    }

    /**
     * This class handler to json
     * @return {string} text
     */
    public toJsonString(): string {
      return JSON.stringify(this.toMap());
    }

    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    public toMap()
      : Record<string, unknown> {
      const res = JSON.parse(JSON.stringify(this));
      const user = res["user"];
      const customer = res["customer"];
      if (user && !customer) {
        res["customer"] = user;
        delete res["user"];
      }
      delete res["clientData"];
      return res;
    }

    /**
     * Create payment id
     * @return {string} text
     */
    public static generateID(): string {
      return `${DocumentTypes.payments}${uuidv1()}`;
    }
  }

}