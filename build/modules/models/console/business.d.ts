import { IReferral, TimeZone } from "../../interfaces/miscellenous";
import { ConsoleUser } from "./user";
/**
 * akub business client model
*/
export declare class Business {
    id: string;
    iat: number;
    test: boolean;
    lut: number | undefined;
    calendar: ICalendar | undefined;
    marketplace: IMarketplace | undefined;
    billing: IBusinessBilling | undefined;
    legal: IBusinessLegal | undefined;
    links: IBusinessLinks | undefined;
    providers: IPaymentConnectors | undefined;
    location: ILocation | undefined;
    info: IBusinessInfo | undefined;
    referral: IReferral | undefined;
    team: Record<string, {
        role: string;
    }>;
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {Business} this class
     */
    static fromJson(obj: Record<string, unknown>): Business;
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
     * @param {Business[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {Business | undefined} found object else undefined
     */
    static findOne(list: Business[], id: string): Business | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
    /**
     * Check if user has read write privilege
     * @param {ConsoleUser} user  the user in question
     * @return {boolean} value
     */
    isaPrivilegedUser(user: ConsoleUser): boolean;
    /**
     * get all privileged users
     * @return {string[]} value
     */
    allPrivilegedUsers(): string[];
    /**
     * get owner
     * @return {string | undefined } value
     */
    getOwner(): string | undefined;
    /**
     * Find space owner
     * @param {ConsoleUser} user the console user in question
     * @return {boolean} value
     */
    findSpaceOwner(user: ConsoleUser): boolean;
}
export interface IBusinessLegal {
    rcNumber: string;
    name: string;
    vat: string;
}
export interface IBusinessLinks {
    website: string;
    facebook: string;
    instagram: string;
}
export interface IMarketplace {
    schedule: ISchedule;
    accountType: string;
    location: ILocation;
    availability: string;
    published?: boolean;
    recommended?: boolean;
    photos: string[];
    billing: MarketplaceBilling;
}
export interface ISchedule {
    thu?: IWeekDayDuration;
    tue?: IWeekDayDuration;
    max: number;
    wed?: IWeekDayDuration;
    sat?: IWeekDayDuration;
    fri?: IWeekDayDuration;
    sun?: IWeekDayDuration;
    mon?: IWeekDayDuration;
}
export interface IWeekDayDuration {
    begin: string;
    end: string;
}
/**
 * How the business get's paid
 */
export interface MarketplaceBilling {
    stripe: string;
}
export interface IBusinessInfo {
    country: string;
    teamSize: string;
    mobile: string;
    name: string;
    logo?: string;
    description: string;
    services: IBusinessServices;
    email: string;
    currency: string;
}
export interface IBusinessServices {
    list: string[];
    primary: string;
}
/**
 * Supported payment connectors
 */
export interface IPaymentConnectors {
    stripe?: IPayProviderData;
    tink?: IPayProviderData;
    swish?: IPayProviderData;
}
/**
 * Payment provider interface
*/
export interface IPayProviderData {
    id: string;
    testID?: string;
    created?: number;
    completed: boolean;
}
/**
 * business billing interface
*/
export interface IBusinessBilling {
    note: string;
    name: string;
    location: ILocation;
}
export interface ILocation {
    country: string;
    code: string;
    city: string;
    address2: string;
    formatted: string;
    latitude: null;
    postCode: string;
    place: string;
    longitude: null;
}
export interface ICalendar {
    weekStart: string;
    timeZone: TimeZone;
}
