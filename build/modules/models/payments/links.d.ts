import { TaxBehavior } from "labs-sharable";
import { InvoiceAddress, PayLinkReference } from "../../interfaces/documents";
import { Business } from "../console/business";
/**
 * A class
*/
export declare class PaymentLinkRequest {
    client: string;
    created: number;
    amount: number;
    currency: string;
    reference: string;
    identifier: string;
    status: string;
    id: string;
    reason: string;
    taxBehavior: undefined | TaxBehavior;
    items: undefined | Record<string, unknown>[];
    link: undefined | PayLinkReference;
    user: undefined | Record<string, unknown>;
    test: boolean;
    clientData: Business | undefined;
    /**
     * Change record to PaymentLinkRequest class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {PaymentLinkRequest} this class
     */
    static fromJson(obj: Record<string, unknown>): PaymentLinkRequest;
    /**
   * Helper class function to find one specific object based on id
   *
   * @param {PaymentLinkRequest[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {PaymentLinkRequest | undefined} found object else undefined
   */
    static findOne(list: PaymentLinkRequest[], id: string): PaymentLinkRequest | undefined;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
    * get document in map format
    * @param {boolean} hideref turn on if map
    * should not show reference object
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(hideref?: boolean): Record<string, unknown>;
    /**
    * get document in map format
    * @param {boolean} payID payment link id
    * should not show reference object
    * @return { Record<string, unknown>} returns doc map .
    */
    earlyToMap(payID: string): Record<string, unknown>;
}
/**
 * A class
*/
export declare class PayWithInvoiceRequest {
    client: InvoiceAddress | undefined;
    paid: number | undefined;
    date: number | undefined;
    due: number | undefined;
    vat: number;
    identifier: string;
    businessID: string;
    footer: string;
    reason: string;
    taxBehavior: undefined | TaxBehavior;
    items: undefined | Record<string, unknown>[];
    shipping: undefined | Record<string, unknown>;
    user: undefined | Record<string, unknown>;
    test: boolean;
    /**
     * Change record to PayWithInvoiceRequest class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {PayWithInvoiceRequest} this class
     */
    static fromJson(obj: Record<string, unknown>): PayWithInvoiceRequest;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
    * get document in map format
    * @param {boolean} hideref turn on if map
    * should not show reference object
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
