import { OnboardingData } from "./onboarding";
import { UserModel } from "labs-sharable";
/**
 * Buka OrganisationData class
*/
export declare class OrganisationData {
    name: string;
    logo: string;
    currency: string;
    domain: string;
    locale: string;
    id: string;
    memberID: string;
    regSource: string;
    stripeID: string;
    category: string | undefined;
    rating: number | undefined;
    sms: Record<string, unknown>;
    provider?: PaymentConnectors;
    contact: Record<string, unknown>;
    referral: Record<string, unknown>;
    schedule: Record<string, unknown>;
    onboarding: Record<string, unknown>;
    setupDone: boolean;
    acceptedLegalTerms: boolean;
    testAcct: boolean;
    members: string[];
    payProviders: string[] | undefined;
    whyUseBuka: string[] | undefined;
    gallery: string[] | undefined;
    methods: string[] | undefined;
    contactData: ContactData | undefined;
    scheduleData: ScheduleData | undefined;
    onboardingData: OnboardingData | undefined;
    smsData: SMSData | undefined;
    /**
     * Change record to Reservation class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {OrganisationData} this class
     */
    static fromJson(obj: Record<string, unknown>): OrganisationData;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Check if user has read write privilege
     * @param {UserModel} user  the user in question
     * @return {boolean} value
     */
    static isaPrivilegedUser(user: UserModel): boolean;
    /**
     * Find space owners
     * @param {UserModel} user  the user in question
     * @return {boolean} value
     */
    static findSpaceOwners(user: UserModel): boolean;
    /**
     * Check if of this class type
     * @param {Object} error the object
     * @returns {boolean} returns true or false
     */
    static isOfInstance(error: Object): boolean;
    /**
     * resolve maps for certain attributes
     * @return {void} text
     */
    resolveMaps(): void;
    /**
     * Helper class function to find one specific id
     *
     * @param {OrganisationData[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {OrganisationData | undefined} found object else undefined
     */
    static findOne(list: OrganisationData[], id: string): OrganisationData | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
/**
 * Buka ContactData class
*/
export declare class ContactData {
    email: string;
    legalName: string;
    mobile: string;
    orgNumber: string;
    vat: string;
    website: string;
    address: Record<string, unknown>;
    addressData: AddressData | undefined;
    /**
     * Change record to ContactData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ContactData} this class
     */
    static fromJson(obj: Record<string, unknown>): ContactData;
    /**
     * resolve maps for certain attributes
     * @return {void} text
     */
    resolveMaps(): void;
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
 * BookingEmailNotify
*/
export interface SMSTrial {
    active: boolean;
    ends: number;
}
/**
 * BookingEmailNotify
*/
export interface PaymentConnectors {
    stripe?: PayProviderData;
    tink?: PayProviderData;
}
/**
 * BookingEmailNotify
*/
export interface PayProviderData {
    id: string;
    testID?: string;
    created?: number;
    completed: boolean;
}
/**
 * Buka SMSData class
*/
export declare class SMSData {
    active: boolean;
    lut: undefined | number;
    expires: undefined | number;
    mobile: string;
    trial: SMSTrial | undefined;
    /**
     * Change record to SMSData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {SMSData} this class
     */
    static fromJson(obj: Record<string, unknown>): SMSData;
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
 * Buka AddressData class
*/
export declare class AddressData {
    city: string;
    postCode: string;
    code: string;
    country: string;
    place: string;
    formatted: string;
    longitude: number | undefined;
    latitude: number | undefined;
    /**
     * Change record to AddressData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {AddressData} this class
     */
    static fromJson(obj: Record<string, unknown>): AddressData;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * This class handler to address
     * @return {string} text
     */
    toString(): string;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
/**
 * Buka ScheduleData class
*/
export declare class ScheduleData {
    open: number;
    closed: number;
    max: number;
    days: number[];
    /**
     * Change record to ScheduleData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ScheduleData} this class
     */
    static fromJson(obj: Record<string, unknown>): ScheduleData;
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
