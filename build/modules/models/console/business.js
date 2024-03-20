"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Business = void 0;
const class_transformer_1 = require("class-transformer");
const __1 = require("../..");
const labs_sharable_1 = require("labs-sharable");
/**
 * akub business client model
*/
class Business {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.id = ""; // uses the format org_{id}
        this.iat = 0;
        this.team = {};
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {Business} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(Business, obj, { excludeExtraneousValues: true });
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
     * Check if of this class type
     * @param {Object} error the object
     * @returns {boolean} returns true or false
     */
    static isOfInstance(error) {
        return error instanceof Business;
    }
    /**
     * Helper class function to find one specific id
     *
     * @param {Business[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {Business | undefined} found object else undefined
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
        const res = JSON.parse(this.toJsonString());
        /// delete any unwanted prints i.e., delete res["onboardingData"];
        return res;
    }
    /**
     * Check if user has read write privilege
     * @param {ConsoleUser} user  the user in question
     * @return {boolean} value
     */
    isaPrivilegedUser(user) {
        const parm = [__1.AccountPrivileges.admin.toString(),
            __1.AccountPrivileges.owner.toString()];
        if (!this.team)
            return false;
        if (!user.contact)
            return false;
        if (!this.team[`${user.contact.email}`])
            return false;
        return parm.includes(this.team[`${user.contact.email}`].role);
    }
    /**
     * Find space owner
     * @param {ConsoleUser} user the console user in question
     * @return {boolean} value
     */
    findSpaceOwner(user) {
        if (!this.team)
            return false;
        if (!user.contact)
            return false;
        if (!this.team[`${user.contact.email}`])
            return false;
        return (0, labs_sharable_1.equalToIgnoreCase)(this.team[`${user.contact.email}`].role, __1.AccountPrivileges.owner.toString());
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "iat", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "lut", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "calendar", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "marketplace", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "billing", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "legal", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "links", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "providers", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "location", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "info", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "referral", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Business.prototype, "team", void 0);
exports.Business = Business;
//# sourceMappingURL=business.js.map