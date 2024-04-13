"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralModel = exports.ProfileData = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * User ProfileData class
*/
class ProfileData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.first = "";
        this.last = "";
        this.location = "";
        this.mobile = "";
        this.work = "";
    }
    /**
     * Change record to ProfileData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ProfileData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ProfileData, obj, { excludeExtraneousValues: true });
        return result;
    }
    /**
     * getter
     * @return {string}full name of user
     */
    fullname() {
        return this.first + " " + this.last;
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
], ProfileData.prototype, "first", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProfileData.prototype, "last", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProfileData.prototype, "location", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProfileData.prototype, "mobile", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProfileData.prototype, "work", void 0);
exports.ProfileData = ProfileData;
/**
 * User ReferralModel class
*/
class ReferralModel {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.code = "";
        this.link = "";
        this.longLink = "";
    }
    /**
     * Change record to ReferralModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ReferralModel} this class
     */
    static fromJson(obj) {
        if (obj == undefined)
            return new ReferralModel();
        const result = (0, class_transformer_1.plainToInstance)(ReferralModel, obj, { excludeExtraneousValues: true });
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
], ReferralModel.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReferralModel.prototype, "link", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReferralModel.prototype, "longLink", void 0);
exports.ReferralModel = ReferralModel;
//# sourceMappingURL=profile.js.map