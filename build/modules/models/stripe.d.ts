import Stripe from "stripe";
/**
 * Service class for stripe service
 */
export declare class StripeHandle {
    key: string;
    readonly stripe: Stripe;
    /**
     * Class main constructor
     * @param {string} apikey initialize with stripe keys
     */
    constructor(apikey: string);
}
