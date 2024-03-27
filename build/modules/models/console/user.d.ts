import { IFCM } from "../../interfaces/miscellenous";
/**
 * akub console user model
*/
export declare class ConsoleUser {
    id: string;
    iat: number;
    lut: number | undefined;
    profile: IConsoleProfile | undefined;
    contact: IConsoleContact | undefined;
    login: IConsoleLogin | undefined;
    fcm: IFCM | undefined;
    country: string;
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ConsoleUser} this class
     */
    static fromJson(obj: Record<string, unknown>): ConsoleUser;
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
     * @param {ConsoleUser[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ConsoleUser | undefined} found object else undefined
     */
    static findOne(list: ConsoleUser[], id: string): ConsoleUser | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
export interface IConsoleContact {
    emailVerified: boolean;
    phone: string;
    phoneVerified: boolean;
    email: string;
}
export interface IConsoleLogin {
    passcode?: string;
    tfA: boolean;
    provider: string;
}
export interface IConsoleProfile {
    image?: string;
    last: string;
    first: string;
}
