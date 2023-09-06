import { StripeDataHandler } from "labs-sharable";
/**
 * Buka ReservationData class
*/
export declare class ReservationData {
    administrativeCut: number;
    amountCharged: number;
    amountPaid: number;
    expectedGems: number;
    earned: number;
    created: number;
    lut: number;
    productID: string;
    conversationID: string | undefined;
    uid: string;
    updatedBy: string;
    currency: string;
    id: string;
    text: string;
    client: string;
    payCase: string;
    status: string;
    method: string;
    stripeAccount: string;
    checkoutID: string;
    usedLoyalty: boolean;
    pending: boolean;
    bookings: string[];
    users: string[] | undefined;
    source: string;
    time: Record<string, unknown>;
    private timeModel;
    listOfBookings: BookingData[];
    /**
     * getter
     * @return {TimeData | undefined} time data
     */
    timeData(): TimeData | undefined;
    /**
     * getter
     * @return {string} time data
     */
    paymentCase(): string;
    /**
     * set time data
     * @param {TimeData} value time data for this reservation
     */
    setTimeData(value: TimeData): void;
    /**
     * resolves certain maps from original json
     * @return {void} text
     */
    resolveMaps(): void;
    /**
     * Change record to Reservation class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ReservationData} this class
     */
    static fromJson(obj: Record<string, unknown>): ReservationData;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {ReservationData[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ReservationData | undefined} found object else undefined
     */
    static findOne(list: ReservationData[], id: string): ReservationData | undefined;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
/**
 * Buka TimeData class
*/
export declare class TimeData {
    date: number;
    start: number;
    end: number;
    duration: number;
    time: string;
    /**
     * Change Firebase record to TimeData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {TimeData} this class
     */
    static fromJson(obj: Record<string, unknown>): TimeData;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Compare this time data to another
     * check if they are similar or not
     * @param {TimeData} other time data of other booking
     * @return {boolean} result
     */
    compareTimeDataStart(other: TimeData): boolean;
    /**
     * Compare this time data to another
     * check if they are similar or not
     * @param {TimeData} other time data of other booking
     * @return {boolean} result
     */
    compareTimeDataEnd(other: TimeData): boolean;
    /**
     * Tell if there has been a date
     * change between this and other
     * @param {TimeData} other time data of other booking
     * @return {boolean} result
     */
    isThereADateChange(other: TimeData): boolean;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
/**
 * Buka BukaCheckoutData class
*/
export declare class BukaCheckoutData {
    discount: number;
    expectedGems: number;
    fee: number;
    paid: number;
    previousPayment: number;
    price: number;
    promoCode: string;
    /**
     * Change Firebase record to BukaCheckoutData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {BukaCheckoutData} this class
     */
    static fromJson(obj: Record<string, unknown>): BukaCheckoutData;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
/**
 * Buka BookingData class
*/
export declare class BookingData {
    productID: string;
    user: string;
    client: string;
    id: string;
    currency: string;
    status: string;
    promoCode: string;
    reservationID: string;
    itemID: string;
    link: string;
    price: number;
    paid: number;
    fee: number;
    pending: boolean;
    cleared: boolean;
    reviewed: boolean;
    time: Record<string, unknown>;
    stripe: Record<string, unknown> | undefined;
    checkout: Record<string, unknown> | undefined;
    earned: number | undefined;
    expectedGems: number | undefined;
    actualPrice: number | undefined;
    discount: number | undefined;
    users: string[] | undefined;
    source: string;
    refund?: Record<string, unknown>;
    timeData?: TimeData;
    checkoutData?: BukaCheckoutData;
    stripeData?: StripeDataHandler;
    /**
     * Change record to BookingData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {BookingData} this class
     */
    static fromJson(obj: Record<string, unknown>): BookingData;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {BookingData[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {BookingData | undefined} found object else undefined
     */
    static findOne(list: BookingData[], id: string): BookingData | undefined;
    /**
     * resolves certain maps from original json
     * @return {void} text
     */
    resolveMaps(): void;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
