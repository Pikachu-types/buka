/**
 * MessageModel class
*/
export declare class MessageModelModel {
    id: string;
    conversationID: string;
    type: string;
    recipient: string;
    sender: string;
    content: string;
    created: number;
    lut: number;
    read: boolean;
    media: string[];
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {MessageModelModel} this class
     */
    static fromJson(obj: Record<string, unknown>): MessageModelModel;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {MessageModelModel[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {MessageModelModel | undefined} found object else undefined
     */
    static findOne(list: MessageModelModel[], id: string): MessageModelModel | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
