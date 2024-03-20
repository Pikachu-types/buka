"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerContact = void 0;
const class_transformer_1 = require("class-transformer");
const documents_1 = require("../../enums/documents");
const uuid_1 = require("uuid");
/**
 * Saved contacts for organisations on console
*/
class CustomerContact {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.id = "";
        this.name = "";
        this.address = "";
        this.mobile = "";
        this.email = "";
        this.iat = 0;
        /**
         * Organisation id who registered this customer
         */
        this.owner = "";
        this.country = "";
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {CustomerContact} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(CustomerContact, obj, { excludeExtraneousValues: true });
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
     * Helper class function to find one specific object based on id
     *
     * @param {CustomerContact[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {CustomerContact | undefined} found object else undefined
     */
    static findOne(list, id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id)
                return list[i];
        }
        return;
    }
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap() {
        return JSON.parse(this.toJsonString());
    }
    /**
     * Create id
     * @return {string} text
     */
    static generateID() {
        return `${documents_1.DocumentTypes.contact}${(0, uuid_1.v1)()}`;
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], CustomerContact.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], CustomerContact.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], CustomerContact.prototype, "address", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], CustomerContact.prototype, "mobile", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], CustomerContact.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], CustomerContact.prototype, "iat", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], CustomerContact.prototype, "owner", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], CustomerContact.prototype, "vat", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], CustomerContact.prototype, "country", void 0);
exports.CustomerContact = CustomerContact;
//# sourceMappingURL=contact.js.map