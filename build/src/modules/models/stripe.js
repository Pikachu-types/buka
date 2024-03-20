"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeHandle = void 0;
const stripe_1 = __importDefault(require("stripe"));
/**
 * Service class for stripe service
 */
class StripeHandle {
    /**
     * Class main constructor
     * @param {string} apikey initialize with stripe keys
     */
    constructor(apikey) {
        this.key = apikey;
        this.stripe = new stripe_1.default(this.key, {
            apiVersion: "2022-08-01",
        });
    }
}
exports.StripeHandle = StripeHandle;
//# sourceMappingURL=stripe.js.map