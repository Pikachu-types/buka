"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionHelpers = void 0;
const labs_sharable_1 = require("labs-sharable");
const approvedClients_1 = require("../models/approvedClients");
/**
 * Callable Function Helper class
 */
class FunctionHelpers {
    /**
     * Create a proper string from the CipherType model
     * @param {string} source content to get RSA code
     * @param {string} secret designated cipher secret code
     * @return {Buffer} returns value.
     */
    static decipherRSAKey(source, secret) {
        const data = FunctionHelpers.changeCipherStringToModel(source);
        return Buffer.from(labs_sharable_1.LabsCipher.decrypt(data, secret), "utf-8");
    }
    /**
     * This class handler to RSA keys
     * @param {string} cipherKey  key
     * @param {string} encoded  rsa key written in bcrypt
     * @return {Buffer} buffer value
     */
    static bcryptToRSAKey(cipherKey, encoded) {
        try {
            const pV = FunctionHelpers.
                changeCipherStringToModel(encoded);
            const publicKey = labs_sharable_1.LabsCipher.decrypt(pV, cipherKey);
            return Buffer.from(publicKey, "utf-8");
        }
        catch (_) {
            return;
        }
    }
    /**
     * Create a proper string from the CipherType model
     * @param {CipherType} source content to string from
     * @return {string} returns value.
     */
    static createCipherString(source) {
        return `${source.content}-bu(${source.iv})`;
    }
    /**
     * Change JSON to cipher string
     * @param {Record<string, unknown>} source json content
     * @param {string} secret designated cipher secret code
     * @return {string} returns aes value.
     */
    static encryptJSON(source, secret) {
        return this.bukaCipherString(secret, JSON.stringify(source));
    }
    /**
     * Revert CipherType model string to readable string
     * long function
     * @param {string} cipherKey secret key
     * @param {string} source content
     * @return {string} returns value.
     */
    static bukaCipherToString(cipherKey, source) {
        try {
            const signature = FunctionHelpers.
                changeCipherStringToModel(source);
            return labs_sharable_1.LabsCipher.decrypt(signature, cipherKey);
        }
        catch (e) {
            throw new labs_sharable_1.CustomError(`${e}`);
        }
    }
    /**
     * Create a proper string from the CipherType model
     * long function
     * @param {string} secret secret key
     * @param {string} source content
     * @return {string} returns value.
     */
    static bukaCipherString(secret, source) {
        return FunctionHelpers.
            createCipherString(labs_sharable_1.LabsCipher.encrypt(source, secret));
    }
    /**
     * Verify Client side app approval
     * @param {string} secretKey key used to unlock cipher
     * @param {string} source content to string from
     * @return {string} returns value.
     */
    static verifyAppAuthorization(secretKey, source) {
        if (source === undefined)
            return false;
        let appID;
        try {
            const signature = FunctionHelpers.
                changeCipherStringToModel(source);
            appID = labs_sharable_1.LabsCipher.decrypt(signature, secretKey);
            return approvedClients_1.ApprovedClients.applications.includes(appID);
        }
        catch (_) {
            return false;
        }
    }
    /**
     * Create a proper string from the CipherType model
     * @param {CipherType} source content to string from
     * @return {string} returns value.
     */
    static changeCipherStringToModel(source) {
        const cipher = source.split("-bu");
        if (cipher.length != 2) {
            throw new labs_sharable_1.CustomError("Invalid source string");
        }
        return {
            iv: cipher[1].replace("(", "").replace(")", ""),
            content: cipher[0],
        };
    }
    /**
     * Verify the requester of a http request
     * @param {string} secretKey cipher secret key
     * @param {string} source authorization key found in header
     * @return {boolean} returns state.
     */
    static verifyRequester(secretKey, source) {
        if (source === undefined)
            return false;
        let appID;
        try {
            const signature = FunctionHelpers.
                changeCipherStringToModel(source);
            appID = labs_sharable_1.LabsCipher.decrypt(signature, secretKey);
            return approvedClients_1.ApprovedClients.requesters.includes(appID);
        }
        catch (err) {
            return false;
        }
    }
    /**
    * Generates formatted currency string
    * @param {number} amount to be formatted
    * @param {number} currency value currency
    * @return {string} value
    */
    static formatCurrency(amount, currency = 'SEK') {
        return Intl.NumberFormat('en-US', { style: 'currency', currency: currency.toUpperCase() }).format(amount);
    }
    /**
    * Generates amount value
    * @param {number} amount number value
    * @return {number} value
    */
    static getAmount(amount) {
        return amount * 100;
    }
    /**
      * Generates total amount spent from item list
      * @param {InvoiceItems[]} items list of items
      * @return {number} value
      */
    static getInvoiceItemsTotal(items) {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            sum = (item.amount * item.quantity) + sum;
        }
        return sum;
    }
}
exports.FunctionHelpers = FunctionHelpers;
//# sourceMappingURL=helper.js.map