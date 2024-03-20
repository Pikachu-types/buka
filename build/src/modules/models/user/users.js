"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOBModel = exports.LoginData = exports.UserModel = void 0;
const class_transformer_1 = require("class-transformer");
const fcm_model_1 = require("./fcm_model");
const picture_1 = require("./picture");
const profile_1 = require("./profile");
const labs_sharable_1 = require("labs-sharable");
/**
* General User class
*/
class UserModel {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.email = "";
        this.gender = "";
        this.id = "";
        this.testAccount = false;
        this.earnings = [];
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {void} this class
     */
    fromJson(obj) {
        var _a;
        this.email = obj.email;
        this.gender = obj.gender;
        this.id = ((_a = obj.id) !== null && _a !== void 0 ? _a : '');
        this.testAccount = obj.testAccount;
        this.stripe = obj.stripe;
        this.credits = obj.credits;
        this.subscribed = obj.subscribed;
        this.profile = profile_1.ProfileData.fromJson(obj.profile);
        this.dob = DOBModel.fromJson(obj.dob);
        this.login = LoginData.fromJson(obj.login);
        this.picture = picture_1.UserPictureModel.fromJson(obj.picture);
        this.referral = profile_1.ReferralModel.fromJson(obj.referral);
        this.fcm = fcm_model_1.FCMDataModel.fromJson(obj.fcm);
        if (obj.creditHistory != null || obj.creditHistory != undefined) {
            const history = obj.creditHistory;
            for (let i = 0; i < history.length; i++) {
                this.earnings.push(picture_1.EarningsHistoryModel.fromJson(history[i]));
            }
        }
    }
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {UserModel[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {UserModel | undefined} found object else undefined
     */
    static findOne(list, id) {
        var _a;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id || ((_a = list[i].login) === null || _a === void 0 ? void 0 : _a.uid) === id)
                return list[i];
        }
        return;
    }
    /**
     * Check if of this class type
     * @param {Object} error the object
     * @returns {boolean} returns true or false
     */
    static isOfInstance(error) {
        return error instanceof UserModel;
    }
    /**
    * This class returns user pronoun
    * @return {string} text
    */
    pronoun() {
        if ((0, labs_sharable_1.equalToIgnoreCase)(this.gender, 'male')) {
            return 'his';
        }
        else if ((0, labs_sharable_1.equalToIgnoreCase)(this.gender, 'female')) {
            return 'her';
        }
        else {
            return 'their';
        }
    }
}
exports.UserModel = UserModel;
/**
 * User LoginData class
*/
class LoginData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.provider = "";
        this.uid = "";
        this.joined = 0;
        this.referral = "";
    }
    /**
     * Change record to LoginData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {LoginData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(LoginData, obj, { excludeExtraneousValues: true });
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
], LoginData.prototype, "provider", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], LoginData.prototype, "uid", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], LoginData.prototype, "verified", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], LoginData.prototype, "joined", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], LoginData.prototype, "referral", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], LoginData.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], LoginData.prototype, "company", void 0);
exports.LoginData = LoginData;
/**
 * User DOBModel class
*/
class DOBModel {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.date = "";
        this.age = 0;
        this.year = 0;
    }
    /**
     * Change record to DOBModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {DOBModel} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(DOBModel, obj, { excludeExtraneousValues: true });
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
], DOBModel.prototype, "date", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], DOBModel.prototype, "age", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], DOBModel.prototype, "year", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], DOBModel.prototype, "month", void 0);
exports.DOBModel = DOBModel;
//# sourceMappingURL=users.js.map