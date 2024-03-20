/**
 * User UserPictureModel class
*/
export declare class UserPictureModel {
    thumbnail: string;
    large: string;
    main: string;
    /**
     * Change record to UserPictureModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {UserPictureModel} this class
     */
    static fromJson(obj: Record<string, unknown>): UserPictureModel;
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
 * User EarningsHistoryModel class
*/
export declare class EarningsHistoryModel {
    title: string;
    subtitle: string;
    socialIcon?: string;
    amount: number;
    timestamp: number;
    value: string;
    /**
     * Change record to EarningsHistoryModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {EarningsHistoryModel} this class
     */
    static fromJson(obj: Record<string, unknown>): EarningsHistoryModel;
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
