export declare const reviewTypes: string[];
/**
 * Buka ReviewRequest class
*/
export declare class ReviewRequest {
    product: string;
    reviewed: string;
    purchase: string;
    reviewer: string;
    message: string;
    status: string;
    review: string;
    itemID: string;
    created: number;
    updated: number;
    submitted: undefined | number;
    link: string;
    id: string;
    reviewList: Record<string, unknown>[];
    private items;
    /**
     * Change record to ReviewRequest class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ReviewRequest} this class
     */
    static fromJson(obj: Record<string, unknown>): ReviewRequest;
    /**
     * resolve maps for certain attributes
     * @return {void} text
     */
    generateItems(): void;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {ReviewRequest[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {ReviewRequest | undefined} found object else undefined
     */
    static findOne(list: ReviewRequest[], id: string): ReviewRequest | undefined;
    /**
     * resolve items maps to review list
     * @return {void} nothing
     */
    resolveReviewList(): void;
    /**
     * resolve review list maps to review list
     * @return {void} nothing
     */
    resolveItems(): void;
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
 * Review Data class
*/
export declare class ReviewData {
    type: string;
    description: string;
    rating: number;
    media: string[];
    /**
     * Change record to ReviewData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ReviewData} this class
     */
    static fromJson(obj: Record<string, unknown>): ReviewData;
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
