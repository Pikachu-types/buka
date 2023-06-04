import { CustomFCM } from "labs-sharable";
import { LinklyAPIRequest, LinklyAPIResponse } from "../interfaces/miscellenous";
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
     * cancel request from consumer
     * @param {LinklyAPIRequest} request model
     * @return {Promise<LinklyAPIResponse>} returns response.
     */
    static cancelRequest(request: LinklyAPIRequest): Promise<LinklyAPIResponse>;
}
