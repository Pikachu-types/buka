"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleUser = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * akub console user model
*/
class ConsoleUser {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.id = ""; // uses the format ba_{id}
        this.iat = 0;
        this.country = "";
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ConsoleUser} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ConsoleUser, obj, { excludeExtraneousValues: true });
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
        return error instanceof ConsoleUser;
    }
    /**
     * Helper class function to find one specific id
     *
     * @param {ConsoleUser[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ConsoleUser | undefined} found object else undefined
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
], ConsoleUser.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ConsoleUser.prototype, "iat", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ConsoleUser.prototype, "lut", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ConsoleUser.prototype, "profile", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ConsoleUser.prototype, "contact", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ConsoleUser.prototype, "login", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ConsoleUser.prototype, "fcm", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ConsoleUser.prototype, "country", void 0);
exports.ConsoleUser = ConsoleUser;
//# sourceMappingURL=user.js.map