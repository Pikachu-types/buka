"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FCMDataModel = void 0;
const class_transformer_1 = require("class-transformer");
const labs_sharable_1 = require("labs-sharable");
/**
 * User FCMDataModel class
*/
class FCMDataModel {
    /**
     * Change record to FCMDataModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {FCMDataModel} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(FCMDataModel, obj, { excludeExtraneousValues: true });
        return result;
    }
    /**
     * getter
     * @return {boolean} validate if user device is ios
     */
    isIOS() {
        if (this.device == undefined)
            return false;
        return (0, labs_sharable_1.equalToIgnoreCase)(this.device, labs_sharable_1.deviceComparator);
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
], FCMDataModel.prototype, "token", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], FCMDataModel.prototype, "device", void 0);
exports.FCMDataModel = FCMDataModel;
//# sourceMappingURL=fcm_model.js.map