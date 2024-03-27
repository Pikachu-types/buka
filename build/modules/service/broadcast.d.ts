import { BroadCastANotification } from "labs-sharable";
import { BroadcastCompileParm } from "../interfaces/account";
/**
 * Serverless Messaging broadcast service
 */
export declare class BroadCastService {
    /**
     * Create Broadcast notification object
     * @param {BroadcastCompileParm} param parameters for compilation
     * @returns {BroadCastANotification} BroadCastANotification value
     */
    static compile(param: BroadcastCompileParm): BroadCastANotification;
}
