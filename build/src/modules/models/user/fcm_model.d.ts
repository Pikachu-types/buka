/**
 * User FCMDataModel class
*/
export declare class FCMDataModel {
    token?: string;
    device?: string;
    /**
     * Change record to FCMDataModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {FCMDataModel} this class
     */
    static fromJson(obj: Record<string, unknown>): FCMDataModel;
    /**
     * getter
     * @return {boolean} validate if user device is ios
     */
    isIOS(): boolean;
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
