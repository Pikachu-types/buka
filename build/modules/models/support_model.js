"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportCardModel = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * Buka SupportCard class
*/
class SupportCardModel {
    constructor() {
        this.id = "";
        this.title = "";
        this.message = "";
        this.created = 0;
        this.lut = 0;
        this.images = [];
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {SupportCardModel} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(SupportCardModel, obj, { excludeExtraneousValues: true });
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
     * @param {SupportCardModel[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {SupportCardModel | undefined} found object else undefined
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
}
__decorate([
    (0, class_transformer_1.Expose)()
], SupportCardModel.prototype, "closed", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SupportCardModel.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SupportCardModel.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SupportCardModel.prototype, "message", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SupportCardModel.prototype, "created", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SupportCardModel.prototype, "lut", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SupportCardModel.prototype, "images", void 0);
exports.SupportCardModel = SupportCardModel;
//# sourceMappingURL=support_model.js.map