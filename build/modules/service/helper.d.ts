/// <reference types="node" />
import { CipherType } from "labs-sharable";
import { InvoiceItems } from "..";
/**
 * Callable Function Helper class
 */
export declare class FunctionHelpers {
    /**
     * Create a proper string from the CipherType model
     * @param {string} source content to get RSA code
     * @param {string} secret designated cipher secret code
     * @return {Buffer} returns value.
     */
    static decipherRSAKey(source: string, secret: string): Buffer;
    /**
     * This class handler to RSA keys
     * @param {string} cipherKey  key
     * @param {string} encoded  rsa key written in bcrypt
     * @return {Buffer} buffer value
     */
    static bcryptToRSAKey(cipherKey: string, encoded: string): Buffer | undefined;
    /**
     * Create a proper string from the CipherType model
     * @param {CipherType} source content to string from
     * @return {string} returns value.
     */
    static createCipherString(source: CipherType): string;
    /**
     * Change JSON to cipher string
     * @param {Record<string, unknown>} source json content
     * @param {string} secret designated cipher secret code
     * @return {string} returns aes value.
     */
    static encryptJSON(source: Record<string, unknown>, secret: string): string;
    /**
     * Revert CipherType model string to readable string
     * long function
     * @param {string} cipherKey secret key
     * @param {string} source content
     * @return {string} returns value.
     */
    static bukaCipherToString(cipherKey: string, source: string): string;
    /**
     * Create a proper string from the CipherType model
     * long function
     * @param {string} secret secret key
     * @param {string} source content
     * @return {string} returns value.
     */
    static bukaCipherString(secret: string, source: string): string;
    /**
     * Verify Client side app approval
     * @param {string} secretKey key used to unlock cipher
     * @param {string} source content to string from
     * @return {string} returns value.
     */
    static verifyAppAuthorization(secretKey: string, source?: string): boolean;
    /**
     * Create a proper string from the CipherType model
     * @param {CipherType} source content to string from
     * @return {string} returns value.
     */
    static changeCipherStringToModel(source: string): CipherType;
    /**
     * Verify the requester of a http request
     * @param {string} secretKey cipher secret key
     * @param {string} source authorization key found in header
     * @return {boolean} returns state.
     */
    static verifyRequester(secretKey: string, source?: string): boolean;
    /**
    * Generates formatted currency string
    * @param {number} amount to be formatted
    * @param {number} currency value currency
    * @return {string} value
    */
    static formatCurrency(amount: number, currency?: string): string;
    /**
    * Generates amount value
    * @param {number} amount number value
    * @return {number} value
    */
    static getAmount(amount: number): number;
    /**
      * Generates total amount spent from item list
      * @param {InvoiceItems[]} items list of items
      * @return {number} value
      */
    static getInvoiceItemsTotal(items: InvoiceItems[]): number;
}
