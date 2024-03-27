/**
 * Buka SMSCampaignModel class
*/
export declare class SMSCampaignModel {
    id: string;
    audience: string;
    checkedOut: string;
    message: string;
    from: string;
    amountPaid: number;
    dateSent: number;
    created: number;
    status: string;
    client: string;
    createdBy: string;
    numbers: string[];
    successful: string[];
    sent: number;
    paid: boolean;
    /**
     * Change record to SMSCampaignModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {SMSCampaignModel} this class
     */
    static fromJson(obj: Record<string, unknown>): SMSCampaignModel;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {SMSCampaignModel[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {SMSCampaignModel | undefined} found object else undefined
     */
    static findOne(list: SMSCampaignModel[], id: string): SMSCampaignModel | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
