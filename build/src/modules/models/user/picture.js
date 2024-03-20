"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsHistoryModel = exports.UserPictureModel = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * User UserPictureModel class
*/
class UserPictureModel {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.thumbnail = "";
        this.large = "";
        this.main = "";
    }
    /**
     * Change record to UserPictureModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {UserPictureModel} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(UserPictureModel, obj, { excludeExtraneousValues: true });
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
], UserPictureModel.prototype, "thumbnail", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], UserPictureModel.prototype, "large", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], UserPictureModel.prototype, "main", void 0);
exports.UserPictureModel = UserPictureModel;
/**
 * User EarningsHistoryModel class
*/
class EarningsHistoryModel {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.title = "";
        this.subtitle = "";
        this.amount = 0;
        this.timestamp = 0;
        this.value = "";
    }
    /**
     * Change record to EarningsHistoryModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {EarningsHistoryModel} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(EarningsHistoryModel, obj, { excludeExtraneousValues: true });
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
], EarningsHistoryModel.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], EarningsHistoryModel.prototype, "subtitle", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], EarningsHistoryModel.prototype, "socialIcon", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], EarningsHistoryModel.prototype, "amount", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], EarningsHistoryModel.prototype, "timestamp", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], EarningsHistoryModel.prototype, "value", void 0);
exports.EarningsHistoryModel = EarningsHistoryModel;
//# sourceMappingURL=picture.js.map