import { FCMDataModel } from "./fcm_model";
import { EarningsHistoryModel, UserPictureModel } from "./picture";
import { ProfileData, ReferralModel } from "./profile";
import { IPayProviderData } from "../console/business";
/**
* General User class
*/
export declare class UserModel {
    email: string;
    gender: string;
    id: string;
    testAccount: boolean;
    credits?: number;
    subscribed?: boolean;
    login?: LoginData;
    profile?: ProfileData;
    referral?: ReferralModel;
    stripe?: IPayProviderData;
    fcm?: FCMDataModel;
    picture?: UserPictureModel;
    dob?: DOBModel;
    earnings: EarningsHistoryModel[];
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {void} this class
     */
    fromJson(obj: Record<string, unknown>): void;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {UserModel[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {UserModel | undefined} found object else undefined
     */
    static findOne(list: UserModel[], id: string): UserModel | undefined;
    /**
     * Check if of this class type
     * @param {Object} error the object
     * @returns {boolean} returns true or false
     */
    static isOfInstance(error: Object): boolean;
    /**
    * This class returns user pronoun
    * @return {string} text
    */
    pronoun(): string;
}
/**
 * User LoginData class
*/
export declare class LoginData {
    provider: string;
    uid: string;
    verified?: boolean;
    joined: number;
    referral: string;
    role?: string;
    company?: string;
    /**
     * Change record to LoginData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {LoginData} this class
     */
    static fromJson(obj: Record<string, unknown>): LoginData;
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
 * User DOBModel class
*/
export declare class DOBModel {
    date: string;
    age: number;
    year: number;
    month?: string;
    /**
     * Change record to DOBModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {DOBModel} this class
     */
    static fromJson(obj: Record<string, unknown>): DOBModel;
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
