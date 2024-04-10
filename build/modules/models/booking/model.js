"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * akub bookings model
*/
class Booking {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.id = ""; // uses the format booking_{id}
        this.client = "";
        this.bookedBy = "";
        this.currency = "";
        this.status = "unknown";
        this.iat = 0;
        this.fee = 0;
        this.activity = [];
        this.payments = [];
        this.people = [];
        this.items = [];
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {Booking} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(Booking, obj, { excludeExtraneousValues: true });
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
        return error instanceof Booking;
    }
    /**
     * Helper class function to find one specific id
     *
     * @param {Booking[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {Booking | undefined} found object else undefined
     */
    static findOne(list, id) {
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            if (!item)
                continue;
            if (item.id === id && this.isOfInstance(item))
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
], Booking.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "client", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "bookedBy", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "currency", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "iat", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "fee", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "lut", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "time", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "repetition", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "activity", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "discount", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "payments", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "people", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "items", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], Booking.prototype, "professional", void 0);
exports.Booking = Booking;
//# sourceMappingURL=model.js.map