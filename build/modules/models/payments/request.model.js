"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequest = void 0;
const class_transformer_1 = require("class-transformer");
const documents_1 = require("../../enums/documents");
const uuid_1 = require("uuid");
var PaymentRequest;
(function (PaymentRequest) {
    /**
     * payment type
     */
    let PaymentType;
    (function (PaymentType) {
        PaymentType["invoice"] = "invoice";
        PaymentType["checkout"] = "checkout";
        PaymentType["booking"] = "booking";
    })(PaymentType = PaymentRequest.PaymentType || (PaymentRequest.PaymentType = {}));
    PaymentRequest.isPaymentRequest = (value) => !!(value === null || value === void 0 ? void 0 : value.client) && !!(value === null || value === void 0 ? void 0 : value.currency);
    class Model {
        constructor() {
            /* eslint new-cap: ["error", { "capIsNew": false }]*/
            /**
             * Document ID {payment_{id}}
             */
            this.id = "";
            /**
             * Client ID ie. client_{id}
             */
            this.client = "";
            /**
             * Timestamp of creation
             */
            this.created = 0;
            this.lut = 0;
            /**
             * Timestamp of expiration
             */
            this.due = 0;
            this.vat = 0;
            /**
             * Charge currency
             */
            this.currency = "";
            /**
             * Amount chargeable
             */
            this.amount = 0;
            /**
             * Status of payment
             */
            this.status = documents_1.Status.Unpaid;
            /**
             * This is like a reference of payment. It helps the payee know what they are about to pay for
             */
            this.reason = "";
            /**
             * Test payment or not
             */
            this.test = false;
        }
        /**
         * Change record to Model class
         *
         * @param {Record<string, unknown>} obj  json object from db
         * @return {Model} this class
         */
        static fromJson(obj) {
            const result = (0, class_transformer_1.plainToInstance)(Model, obj, { excludeExtraneousValues: true });
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
        static findOne(list, id) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === id)
                    return list[i];
            }
            return;
        }
        /**
         * This class handler to json
         * @return {string} text
         */
        toJsonString() {
            return JSON.stringify(this.toMap());
        }
        /**
        * get document in map format
        * @return { Record<string, unknown>} returns doc map .
        */
        toMap() {
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
        static generateID() {
            return `${documents_1.DocumentTypes.payments}${(0, uuid_1.v1)()}`;
        }
    }
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "id", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "client", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "type", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "created", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "lut", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "paidAt", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "due", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "vat", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "currency", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "amount", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "taxBehavior", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "items", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "providers", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "identifier", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "status", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "reason", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "user", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "customer", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "test", void 0);
    __decorate([
        (0, class_transformer_1.Expose)()
    ], Model.prototype, "request", void 0);
    PaymentRequest.Model = Model;
})(PaymentRequest = exports.PaymentRequest || (exports.PaymentRequest = {}));
//# sourceMappingURL=request.model.js.map