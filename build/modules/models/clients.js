"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleData = exports.AddressData = exports.ContactData = exports.OrganisationData = void 0;
const class_transformer_1 = require("class-transformer");
const onboarding_1 = require("./onboarding");
const documents_1 = require("../enums/documents");
const labs_sharable_1 = require("labs-sharable");
/**
 * Buka OrganisationData class
*/
class OrganisationData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.name = "";
        this.logo = "";
        this.currency = "";
        this.domain = "";
        this.id = "";
        this.memberID = "";
        this.regSource = "";
        this.stripeID = "";
        this.contact = {};
        this.referral = {};
        this.schedule = {};
        this.onboarding = {};
        this.setupDone = false;
        this.acceptedLegalTerms = false;
        this.testAcct = false;
        this.members = [];
    }
    /**
     * Change record to Reservation class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {OrganisationData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(OrganisationData, obj, { excludeExtraneousValues: true });
        result.resolveMaps();
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
     * Check if user has read write privilege
     * @param {UserModel} user  the user in question
     * @return {boolean} value
     */
    static isaPrivilegedUser(user) {
        var _a, _b;
        const parm = [documents_1.AccountPrivileges.admin.toString(),
            documents_1.AccountPrivileges.owner.toString()];
        return parm.includes((_b = (_a = user.login) === null || _a === void 0 ? void 0 : _a.role) !== null && _b !== void 0 ? _b : "");
    }
    /**
     * Find space owners
     * @param {UserModel} user  the user in question
     * @return {boolean} value
     */
    static findSpaceOwners(user) {
        var _a, _b;
        return (0, labs_sharable_1.equalToIgnoreCase)(documents_1.AccountPrivileges.owner.toString(), (_b = (_a = user.login) === null || _a === void 0 ? void 0 : _a.role) !== null && _b !== void 0 ? _b : "");
    }
    /**
     * Check if of this class type
     * @param {Object} error the object
     * @returns {boolean} returns true or false
     */
    static isOfInstance(error) {
        return error instanceof OrganisationData;
    }
    /**
     * resolve maps for certain attributes
     * @return {void} text
     */
    resolveMaps() {
        this.contactData = ContactData.fromJson(this.contact);
        this.scheduleData = ScheduleData.fromJson(this.schedule);
        this.onboardingData = onboarding_1.OnboardingData.fromJson(this.onboarding);
    }
    /**
     * Helper class function to find one specific id
     *
     * @param {OrganisationData[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {OrganisationData | undefined} found object else undefined
     */
    static findOne(list, id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id || list[i].memberID === id)
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
}
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "logo", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "currency", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "domain", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "memberID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "regSource", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "stripeID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "category", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "rating", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "contact", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "referral", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "schedule", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "onboarding", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "setupDone", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "acceptedLegalTerms", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "testAcct", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "members", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "payProviders", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "whyUseBuka", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "gallery", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], OrganisationData.prototype, "methods", void 0);
exports.OrganisationData = OrganisationData;
/**
 * Buka ContactData class
*/
class ContactData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.email = "";
        this.legalName = "";
        this.mobile = "";
        this.orgNumber = "";
        this.vat = "";
        this.website = "";
        this.address = {};
    }
    /**
     * Change record to ContactData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ContactData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ContactData, obj, { excludeExtraneousValues: true });
        result.resolveMaps();
        return result;
    }
    /**
     * resolve maps for certain attributes
     * @return {void} text
     */
    resolveMaps() {
        this.addressData = AddressData.fromJson(this.address);
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
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap() {
        return JSON.parse(this.toJsonString());
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], ContactData.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ContactData.prototype, "legalName", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ContactData.prototype, "mobile", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ContactData.prototype, "orgNumber", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ContactData.prototype, "vat", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ContactData.prototype, "website", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ContactData.prototype, "address", void 0);
exports.ContactData = ContactData;
/**
 * Buka AddressData class
*/
class AddressData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.city = "";
        this.postCode = "";
        this.code = "";
        this.country = "";
        this.place = "";
        this.formatted = "";
    }
    /**
     * Change record to AddressData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {AddressData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(AddressData, obj, { excludeExtraneousValues: true });
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
     * This class handler to address
     * @return {string} text
     */
    toString() {
        return this.place + " " + this.city + " " +
            this.postCode + ", " + this.country;
    }
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap() {
        return JSON.parse(this.toJsonString());
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], AddressData.prototype, "city", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AddressData.prototype, "postCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AddressData.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AddressData.prototype, "country", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AddressData.prototype, "place", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AddressData.prototype, "formatted", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AddressData.prototype, "longitude", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AddressData.prototype, "latitude", void 0);
exports.AddressData = AddressData;
/**
 * Buka ScheduleData class
*/
class ScheduleData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.open = 0;
        this.closed = 0;
        this.max = 0;
        this.days = [];
    }
    /**
     * Change record to ScheduleData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ScheduleData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ScheduleData, obj, { excludeExtraneousValues: true });
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
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap() {
        return JSON.parse(this.toJsonString());
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], ScheduleData.prototype, "open", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ScheduleData.prototype, "closed", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ScheduleData.prototype, "max", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ScheduleData.prototype, "days", void 0);
exports.ScheduleData = ScheduleData;
//# sourceMappingURL=clients.js.map