import {plainToInstance, Expose} from "class-transformer";
import {TaxBehavior, unixTimeStampNow} from "labs-sharable";
import { OrganisationData } from "./clients";
import { InvoiceAddress, PayLinkReference } from "../interfaces/documents";

/**
 * A class
*/
export class PaymentLinkRequest {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() client = "";
  @Expose() created = 0;
  @Expose() amount = 0;
  @Expose() currency = "";
  @Expose() reference = "";
  @Expose() identifier = "";
  @Expose() status = "unpaid";
  @Expose() id = "";
  @Expose() reason = "";
  @Expose() taxBehavior: undefined | TaxBehavior;
  @Expose() items: undefined | Record<string, unknown>[];
  @Expose() link: undefined | PayLinkReference;
  @Expose() user: undefined | Record<string, unknown>;
  @Expose() test = false;

  clientData: OrganisationData | undefined;

  /**
   * Change record to PaymentLinkRequest class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {PaymentLinkRequest} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : PaymentLinkRequest {
    const result: PaymentLinkRequest = plainToInstance(PaymentLinkRequest, obj,
        {excludeExtraneousValues: true});
    if (result.items !== undefined) {
      result.items = JSON.parse(JSON.stringify(result.items));
    }
    return result;
  }


  /**
 * Helper class function to find one specific object based on id
 *
 * @param {PaymentLinkRequest[]} list an array to sort from and find given
 * @param {string} id provide the needed id to match for
 * @return {PaymentLinkRequest | undefined} found object else undefined
 */
  public static findOne(list: PaymentLinkRequest[], id: string)
    : PaymentLinkRequest | undefined {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id || list[i].reference === id) return list[i];
    }
    return;
  }

  /**
   * This class handler to json
   * @return {string} text
   */
  public toJsonString(): string {
    return JSON.stringify(this);
  }

  /**
  * get document in map format
  * @param {boolean} hideref turn on if map
  * should not show reference object
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap(hideref = false)
    : Record<string, unknown> {
    const res = JSON.parse(this.toJsonString());
    delete res["clientData"];
    if (hideref) delete res["reference"];
    return res;
  }

  /**
  * get document in map format
  * @param {boolean} payID payment link id
  * should not show reference object
  * @return { Record<string, unknown>} returns doc map .
  */
  public earlyToMap(payID: string)
    : Record<string, unknown> {
    this.created = unixTimeStampNow();
    const res = JSON.parse(this.toJsonString());
    res["link"] = {
      "identifier": payID,
      "provider": "stripe",
    };
    res["id"] = this.reference;
    delete res["amount"];
    res["amount"] = this.amount.toString();
    delete res["clientData"];
    delete res["reference"];
    return res;
  }
}

/**
 * A class
*/
export class PayWithInvoiceRequest {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() client: InvoiceAddress | undefined;
  @Expose() paid: number | undefined;
  @Expose() date: number | undefined;
  @Expose() due: number | undefined;
  @Expose() vat = 25;
  @Expose() identifier = "";
  @Expose() businessID = "";
  @Expose() footer = "";
  @Expose() reason = "";
  @Expose() taxBehavior: undefined | TaxBehavior;
  @Expose() items: undefined | Record<string, unknown>[];
  @Expose() shipping: undefined | Record<string, unknown>;
  @Expose() user: undefined | Record<string, unknown>;
  @Expose() test = false;


  /**
   * Change record to PayWithInvoiceRequest class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {PayWithInvoiceRequest} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : PayWithInvoiceRequest {
    const result: PayWithInvoiceRequest =
      plainToInstance(PayWithInvoiceRequest, obj,
          {excludeExtraneousValues: true});
    return result;
  }


  /**
   * This class handler to json
   * @return {string} text
   */
  public toJsonString(): string {
    return JSON.stringify(this);
  }

  /**
  * get document in map format
  * @param {boolean} hideref turn on if map
  * should not show reference object
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap()
    : Record<string, unknown> {
    const res = JSON.parse(this.toJsonString());
    return res;
  }
}
