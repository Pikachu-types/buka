"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItemData = exports.ProductData = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * Buka ProductData class
*/
class ProductData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.id = "";
        this.category = "";
        this.type = "";
        this.name = "";
        this.description = "";
        this.creator = "";
        this.image = "";
        this.client = "";
        this.published = false;
        this.created = 0;
        this.updated = 0;
        this.items = [];
    }
    /**
     * Change record to ProductData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ProductData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ProductData, obj, { excludeExtraneousValues: true });
        return result;
    }
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {ProductData[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ProductData | undefined} found object else undefined
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
], ProductData.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "category", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "creator", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "image", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "client", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "published", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "created", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "updated", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductData.prototype, "items", void 0);
exports.ProductData = ProductData;
/**
 * ProductItemData class
*/
class ProductItemData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.id = "";
        this.type = "";
        this.thumbnail = "";
        this.category = "";
        this.currency = "";
        this.productID = "";
        this.personType = "";
        this.owner = "";
        this.durationModel = "";
        this.pricingModel = "";
        this.price = 0;
        this.duration = 0;
        this.estimated = false;
        this.images = [];
    }
    /**
     * Change record to ProductItemData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ProductItemData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ProductItemData, obj, { excludeExtraneousValues: true });
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
     * @param {ProductItemData[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ProductItemData | undefined} found object else undefined
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
], ProductItemData.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "thumbnail", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "category", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "currency", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "productID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "personType", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "owner", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "durationModel", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "pricingModel", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "price", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "duration", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "estimated", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ProductItemData.prototype, "images", void 0);
exports.ProductItemData = ProductItemData;
//# sourceMappingURL=products.js.map