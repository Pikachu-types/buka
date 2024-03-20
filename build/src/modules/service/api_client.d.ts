import { CustomFCM } from "labs-sharable";
import { DynamicLinkParam, LinklyAPIRequest, LinklyAPIResponse } from "../interfaces/miscellenous";
/**
 * Api client helper
 */
export declare class ServerApiClient {
    /**
     * Simple api call function for http calls
     * @param {Record<string, unknown>} body payload
     * @return {Promise<number>} returns 1 if device is active
     * 0 if not registered
     * -1 if not found.
     */
    static cloudMessage(body: CustomFCM, key: string): Promise<number>;
    /**
     * create custom link
     * @param {LinklyAPIRequest} request model
     * @return {Promise<LinklyAPIResponse>} returns response.
     */
    static linklyLinkGenerator(request: LinklyAPIRequest): Promise<LinklyAPIResponse>;
    /**
     * Create dynamic link with http calls
     * @param {DynamicLinkCreation} data payload
     * @return {Promise<string>} returns f
     */
    static generateDynamicLink(data: DynamicLinkParam): Promise<string>;
}
