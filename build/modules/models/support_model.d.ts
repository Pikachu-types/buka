/**
 * Buka SupportCard class
*/
export declare class SupportCardModel {
    closed?: number | undefined;
    id: string;
    title: string;
    message: string;
    created: number;
    lut: number;
    images: string[];
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {SupportCardModel} this class
     */
    static fromJson(obj: Record<string, unknown>): SupportCardModel;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {SupportCardModel[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {SupportCardModel | undefined} found object else undefined
     */
    static findOne(list: SupportCardModel[], id: string): SupportCardModel | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
