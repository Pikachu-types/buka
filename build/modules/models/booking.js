"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingData = exports.BukaCheckoutData = exports.TimeData = exports.ReservationData = void 0;
const class_transformer_1 = require("class-transformer");
const labs_sharable_1 = require("labs-sharable");
/**
 * Buka ReservationData class
*/
class ReservationData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.administrativeCut = 0;
        this.amountCharged = 0;
        this.amountPaid = 0;
        this.expectedGems = 0;
        this.earned = 0;
        this.created = 0;
        this.lut = 0;
        this.productID = "";
        this.uid = "";
        this.updatedBy = "";
        this.currency = "";
        this.id = "";
        this.text = "";
        this.client = "";
        this.payCase = "";
        this.status = "";
        this.method = "";
        this.stripeAccount = "";
        this.checkoutID = "";
        this.usedLoyalty = false;
        this.pending = false;
        this.bookings = [];
        this.source = "";
        this.time = {};
        this.listOfBookings = [];
    }
    /**
     * getter
     * @return {TimeData | undefined} time data
     */
    timeData() {
        return this.timeModel;
    }
    /**
     * getter
     * @return {string} time data
     */
    paymentCase() {
        if ((0, labs_sharable_1.equalToIgnoreCase)(this.payCase, "quarter")) {
            return "Pay in parts";
        }
        else if ((0, labs_sharable_1.equalToIgnoreCase)(this.payCase, "full")) {
            return "Pay in full";
        }
        else {
            return "Currently unknown";
        }
    }
    /**
     * set time data
     * @param {TimeData} value time data for this reservation
     */
    setTimeData(value) {
        this.timeModel = value;
    }
    /**
     * resolves certain maps from original json
     * @return {void} text
     */
    resolveMaps() {
        this.timeModel = TimeData.fromJson(this.time);
        // if (this.stripe.invoice !== undefined)
        //   this.stripeData = StripeDataHandler.fromJson(this.stripe);
        if (this.expectedGems === undefined ||
            this.expectedGems === null)
            this.expectedGems = 0;
        if (this.earned === undefined ||
            this.earned === null)
            this.earned = 0;
    }
    /**
     * Change record to Reservation class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ReservationData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(ReservationData, obj, { excludeExtraneousValues: true });
        result.resolveMaps();
        return result;
    }
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {ReservationData[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ReservationData | undefined} found object else undefined
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
        const res = JSON.parse(this.toJsonString());
        delete res["timeModel"];
        return res;
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "administrativeCut", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "amountCharged", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "amountPaid", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "expectedGems", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "earned", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "created", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "lut", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "productID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "conversationID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "uid", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "updatedBy", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "currency", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "text", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "client", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "payCase", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "method", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "stripeAccount", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "checkoutID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "usedLoyalty", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "pending", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "bookings", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "users", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "source", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], ReservationData.prototype, "time", void 0);
exports.ReservationData = ReservationData;
/**
 * Buka TimeData class
*/
class TimeData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.date = 0;
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        this.time = "";
    }
    /**
     * Change Firebase record to TimeData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {TimeData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(TimeData, obj, { excludeExtraneousValues: true });
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
     * Compare this time data to another
     * check if they are similar or not
     * @param {TimeData} other time data of other booking
     * @return {boolean} result
     */
    compareTimeDataStart(other) {
        return (this.start === other.start);
    }
    /**
     * Compare this time data to another
     * check if they are similar or not
     * @param {TimeData} other time data of other booking
     * @return {boolean} result
     */
    compareTimeDataEnd(other) {
        return (this.end === other.end);
    }
    /**
     * Tell if there has been a date
     * change between this and other
     * @param {TimeData} other time data of other booking
     * @return {boolean} result
     */
    isThereADateChange(other) {
        return this.compareTimeDataStart(other) ||
            (this.compareTimeDataEnd(other));
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
], TimeData.prototype, "date", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], TimeData.prototype, "start", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], TimeData.prototype, "end", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], TimeData.prototype, "duration", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], TimeData.prototype, "time", void 0);
exports.TimeData = TimeData;
/**
 * Buka BukaCheckoutData class
*/
class BukaCheckoutData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.discount = 0;
        this.expectedGems = 0;
        this.fee = 0;
        this.paid = 0;
        this.previousPayment = 0;
        this.price = 0;
        this.promoCode = "";
    }
    /**
     * Change Firebase record to BukaCheckoutData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {BukaCheckoutData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(BukaCheckoutData, obj, { excludeExtraneousValues: true });
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
], BukaCheckoutData.prototype, "discount", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BukaCheckoutData.prototype, "expectedGems", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BukaCheckoutData.prototype, "fee", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BukaCheckoutData.prototype, "paid", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BukaCheckoutData.prototype, "previousPayment", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BukaCheckoutData.prototype, "price", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BukaCheckoutData.prototype, "promoCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BukaCheckoutData.prototype, "reference", void 0);
exports.BukaCheckoutData = BukaCheckoutData;
/**
 * Buka BookingData class
*/
class BookingData {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.productID = "";
        this.user = "";
        this.client = "";
        this.id = "";
        this.currency = "";
        this.status = "";
        this.promoCode = "";
        this.reservationID = "";
        this.itemID = "";
        this.link = "";
        this.price = 0;
        this.lut = 0;
        this.created = 0;
        this.paid = 0;
        this.fee = 0;
        // if payment had been triggered previously and waiting confirmation
        this.pending = false;
        this.cleared = false;
        this.reviewed = false;
        this.time = {};
        this.source = "";
    }
    /**
     * Change record to BookingData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {BookingData} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(BookingData, obj, { excludeExtraneousValues: true });
        result.resolveMaps();
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
     * @param {BookingData[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {BookingData | undefined} found object else undefined
     */
    static findOne(list, id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id)
                return list[i];
        }
        return;
    }
    /**
     * resolves certain maps from original json
     * @return {void} text
     */
    resolveMaps() {
        this.timeData = TimeData.fromJson(this.time);
        if (this.stripe !== undefined)
            this.stripeData = labs_sharable_1.StripeDataHandler.fromJson(this.stripe);
        if (this.checkout !== undefined)
            this.checkoutData =
                BukaCheckoutData.fromJson(this.checkout);
    }
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap() {
        const res = JSON.parse(this.toJsonString());
        delete res["timeData"];
        delete res["stripeData"];
        delete res["checkoutData"];
        return res;
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "productID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "client", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "currency", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "promoCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "reservationID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "itemID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "link", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "price", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "lut", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "created", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "paid", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "fee", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "pending", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "cleared", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "reviewed", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "time", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "stripe", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "checkout", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "earned", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "expectedGems", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "actualPrice", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "discount", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "users", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "source", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], BookingData.prototype, "refund", void 0);
exports.BookingData = BookingData;
//# sourceMappingURL=booking.js.map