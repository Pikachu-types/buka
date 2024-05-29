"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategory = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * akub service categories model
*/
class ServiceCategory {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.id = ""; // uses the format cat_{id}
        /**
         * client ID
         */
        this.owner = "";
        this.name = "";
        this.description = "";
        this.iat = 0;
        this.color = 0;
        this.services = [];
        // /**
        // * get document in json response format
        // * @return { Record<string, unknown>} returns doc map .
        // */
        // public toJSON()
        //   : Record<string, unknown> {
        //   const res = JSON.parse(this.toJsonString());
        //   res["services"] = JSON.parse(JSON.stringify(this.services));
        //   return res;
        // }
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ServiceCategory} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ServiceCategory, obj, { excludeExtraneousValues: true });
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
        return error instanceof ServiceCategory;
    }
    /**
     * Helper class function to find one specific id
     *
     * @param {ServiceCategory[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ServiceCategory | undefined} found object else undefined
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
}
__decorate([
    (0, class_transformer_1.Expose)()
], ServiceCategory.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ServiceCategory.prototype, "owner", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ServiceCategory.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ServiceCategory.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ServiceCategory.prototype, "iat", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ServiceCategory.prototype, "color", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ServiceCategory.prototype, "lut", void 0);
exports.ServiceCategory = ServiceCategory;
//# sourceMappingURL=catalogue.js.map