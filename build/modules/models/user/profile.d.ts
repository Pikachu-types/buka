/**
 * User ProfileData class
*/
export declare class ProfileData {
    first: string;
    last: string;
    location: string;
    mobile: string;
    work: string;
    /**
     * Change record to ProfileData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ProfileData} this class
     */
    static fromJson(obj: Record<string, unknown>): ProfileData;
    /**
     * getter
     * @return {string}full name of user
     */
    fullname(): string;
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
 * User ReferralModel class
*/
export declare class ReferralModel {
    code: string;
    link: string;
    longLink: string;
    /**
     * Change record to ReferralModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ReferralModel} this class
     */
    static fromJson(obj?: Record<string, unknown>): ReferralModel;
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
