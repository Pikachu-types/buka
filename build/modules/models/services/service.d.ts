import { IPricing } from "../booking/shared";
/**
 * akub single service model
*/
export declare class SingleService {
    id: string;
    iat: number;
    marketplace: boolean;
    index: number;
    lut: number | undefined;
    basic: IBasic | undefined;
    notification: INotifications | undefined;
    saleSettings: ISaleSettings | undefined;
    pricing: IPricing[];
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {SingleService} this class
     */
    static fromJson(obj: Record<string, unknown>): SingleService;
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
     * @param {SingleService[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {SingleService | undefined} found object else undefined
     */
    static findOne(list: SingleService[], id: string): SingleService | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
interface IBasic {
    serviceType: {
        ref: string;
        data: string;
    };
    name: string;
    description: string;
    aftercare: string;
    category: string;
}
interface INotifications {
    remind: boolean;
    info: {
        duration: string;
        time: number;
    };
}
export interface ISaleSettings {
    tax: string;
}
export {};
