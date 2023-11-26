"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayWithInvoiceRequest = exports.PaymentLinkRequest = void 0;
const class_transformer_1 = require("class-transformer");
const labs_sharable_1 = require("labs-sharable");
/**
 * A class
*/
class PaymentLinkRequest {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.client = "";
        this.created = 0;
        this.amount = 0;
        this.currency = "";
        this.reference = "";
        this.identifier = "";
        this.status = "unpaid";
        this.id = "";
        this.reason = "";
        this.test = false;
    }
    /**
     * Change record to PaymentLinkRequest class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {PaymentLinkRequest} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(PaymentLinkRequest, obj, { excludeExtraneousValues: true });
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
    static findOne(list, id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id || list[i].reference === id)
                return list[i];
        }
        return;
    }
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString() {
        return JSON.stringify(this);
    }
    /**
    * get document in map format
    * @param {boolean} hideref turn on if map
    * should not show reference object
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(hideref = false) {
        const res = JSON.parse(this.toJsonString());
        delete res["clientData"];
        if (hideref)
            delete res["reference"];
        return res;
    }
    /**
    * get document in map format
    * @param {boolean} payID payment link id
    * should not show reference object
    * @return { Record<string, unknown>} returns doc map .
    */
    earlyToMap(payID) {
        this.created = (0, labs_sharable_1.unixTimeStampNow)();
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
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "client", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "created", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "amount", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "currency", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "reference", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "identifier", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "reason", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "taxBehavior", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "items", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "link", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PaymentLinkRequest.prototype, "test", void 0);
exports.PaymentLinkRequest = PaymentLinkRequest;
/**
 * A class
*/
class PayWithInvoiceRequest {
    constructor() {
        this.vat = 25;
        this.identifier = "";
        this.businessID = "";
        this.footer = "";
        this.reason = "";
        this.test = false;
    }
    /**
     * Change record to PayWithInvoiceRequest class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {PayWithInvoiceRequest} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(PayWithInvoiceRequest, obj, { excludeExtraneousValues: true });
        return result;
    }
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString() {
        return JSON.stringify(this);
    }
    /**
    * get document in map format
    * @param {boolean} hideref turn on if map
    * should not show reference object
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap() {
        const res = JSON.parse(this.toJsonString());
        return res;
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "client", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "paid", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "date", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "due", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "vat", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "identifier", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "businessID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "footer", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "reason", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "taxBehavior", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "items", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "shipping", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PayWithInvoiceRequest.prototype, "test", void 0);
exports.PayWithInvoiceRequest = PayWithInvoiceRequest;
//# sourceMappingURL=requests-models.js.map