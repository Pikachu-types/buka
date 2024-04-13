/**
 * Console invitation request
*/
export declare class InvitationRequest {
    token: string;
    name: string;
    creator: string;
    org: string;
    iat: number;
    exp: number;
    invited: string;
    role: string;
    used: boolean;
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {InvitationRequest} this class
     */
    static fromJson(obj: Record<string, unknown>): InvitationRequest;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {InvitationRequest[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {InvitationRequest | undefined} found object else undefined
     */
    static findOne(list: InvitationRequest[], id: string): InvitationRequest | undefined;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
