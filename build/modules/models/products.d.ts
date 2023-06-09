/**
 * Buka ProductData class
*/
export declare class ProductData {
    id: string;
    category: string;
    type: string;
    name: string;
    description: string;
    creator: string;
    image: string;
    client: string;
    published: boolean;
    created: number;
    updated: number;
    items: string[];
    /**
     * Change record to ProductData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ProductData} this class
     */
    static fromJson(obj: Record<string, unknown>): ProductData;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {ProductData[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ProductData | undefined} found object else undefined
     */
    static findOne(list: ProductData[], id: string): ProductData | undefined;
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
 * ProductItemData class
*/
export declare class ProductItemData {
    id: string;
    type: string;
    thumbnail: string;
    category: string;
    currency: string;
    productID: string;
    personType: string;
    owner: string;
    durationModel: string;
    pricingModel: string;
    price: number;
    duration: number;
    estimated: boolean;
    images: string[];
    /**
     * Change record to ProductItemData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ProductItemData} this class
     */
    static fromJson(obj: Record<string, unknown>): ProductItemData;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {ProductItemData[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ProductItemData | undefined} found object else undefined
     */
    static findOne(list: ProductItemData[], id: string): ProductItemData | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
