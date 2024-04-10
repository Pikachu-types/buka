import { BookedItem, BookingStats, IBookingActivity, IBookingPayment, IBookingTime, IDiscount, IPerson, IProfessional } from "./shared";
import { Reservation } from "../../interfaces/account";
/**
 * akub bookings model
*/
export declare class Booking {
    id: string;
    client: string;
    bookedBy: string;
    currency: string;
    status: BookingStats;
    iat: number;
    fee: number;
    lut: number | undefined;
    time: IBookingTime | undefined;
    repetition: boolean | undefined;
    activity: IBookingActivity[];
    discount: IDiscount | undefined;
    payments: IBookingPayment[];
    people: IPerson[];
    items: BookedItem[];
    professional: IProfessional | undefined;
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {Booking} this class
     */
    static fromJson(obj: Record<string, unknown>): Booking;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Check if of this class type
     * @param {Object} error the object
     * @returns {boolean} returns true or false
     */
    static isOfInstance(error: Object): boolean;
    /**
     * Helper class function to find one specific id
     *
     * @param {Booking[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {Booking | undefined} found object else undefined
     */
    static findOne(list: Reservation[], id: string): Booking | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
