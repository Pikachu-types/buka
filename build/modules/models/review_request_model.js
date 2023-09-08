"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewData = exports.ReviewRequest = exports.reviewTypes = void 0;
const class_transformer_1 = require("class-transformer");
exports.reviewTypes = ["overall", "checkIn", "reserve",
    "cleanliness", "accuracy", "communication", "location",
    "worth", "review", "message"];
/**
 * Buka ReviewRequest class
*/
class ReviewRequest {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.product = "";
        this.reviewed = "";
        this.purchase = "";
        this.reviewer = "";
        this.message = "";
        this.status = "";
        this.review = "";
        this.itemID = "";
        this.created = 0;
        this.updated = 0;
        this.link = "";
        this.id = "";
        this.reviewList = [];
        this.items = [];
    }
    /**
     * Change record to ReviewRequest class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ReviewRequest} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ReviewRequest, obj, { excludeExtraneousValues: true });
        return result;
    }
    /**
     * resolve maps for certain attributes
     * @return {void} text
     */
    generateItems() {
        for (let i = 0; i < 9; i++) {
            const data = new ReviewData();
            data.type = exports.reviewTypes[i];
            this.items.push(data);
        }
    }
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {ReviewRequest[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ReviewRequest | undefined} found object else undefined
     */
    static findOne(list, id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id)
                return list[i];
        }
        return;
    }
    /**
     * resolve items maps to review list
     * @return {void} nothing
     */
    resolveReviewList() {
        for (let i = 0; i < this.items.length; i++) {
            this.reviewList.push(this.items[i].toMap());
        }
    }
    /**
     * resolve review list maps to review list
     * @return {void} nothing
     */
    resolveItems() {
        for (let i = 0; i < this.reviewList.length; i++) {
            const data = ReviewData.fromJson(this.reviewList[i]);
            this.items.push(data);
        }
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
        const res = JSON.parse(this.toJsonString());
        delete res["items"];
        return res;
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "product", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "reviewed", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "purchase", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "reviewer", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "message", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "review", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "itemID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "created", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "updated", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "submitted", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "link", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewRequest.prototype, "reviewList", void 0);
exports.ReviewRequest = ReviewRequest;
/**
 * Review Data class
*/
class ReviewData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.type = "";
        this.description = "";
        this.rating = 0;
        this.media = [];
    }
    /**
     * Change record to ReviewData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ReviewData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ReviewData, obj, { excludeExtraneousValues: true });
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
], ReviewData.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewData.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewData.prototype, "rating", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReviewData.prototype, "media", void 0);
exports.ReviewData = ReviewData;
//# sourceMappingURL=review_request_model.js.map