/**
 * akub service categories model
*/
export declare class ServiceCategory {
    id: string;
    /**
     * client ID
     */
    owner: string;
    name: string;
    description: string;
    iat: number;
    color: number;
    lut: number | undefined;
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ServiceCategory} this class
     */
    static fromJson(obj: Record<string, unknown>): ServiceCategory;
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
     * @param {ServiceCategory[]} list an array of bankids to
     *  sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ServiceCategory | undefined} found object else undefined
     */
    static findOne(list: ServiceCategory[], id: string): ServiceCategory | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
