/**
 * Saved contacts for organisations on console
*/
export declare class CustomerContact {
    id: string;
    name: string;
    address: string;
    mobile: string;
    email: string;
    iat: number;
    /**
     * Organisation id who registered this customer
     */
    owner: string;
    vat: string | undefined;
    country: string;
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {CustomerContact} this class
     */
    static fromJson(obj: Record<string, unknown>): CustomerContact;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {CustomerContact[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {CustomerContact | undefined} found object else undefined
     */
    static findOne(list: CustomerContact[], id: string): CustomerContact | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
    /**
     * Create id
     * @return {string} text
     */
    static generateID(): string;
}
