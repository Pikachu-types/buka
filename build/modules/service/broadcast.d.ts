import { BroadCastANotification } from "labs-sharable";
import { BroadcastCompileParm } from "../interfaces/account";
/**
 * Serverless Messaging broadcast service
 */
export declare namespace Broadcast {
    /**
     * Send fcm
     * @param compile
     * @param {string} secret fcm delivery secret key
     * @returns {Promise<number | undefined>}
     */
    function send(compile: BroadCastANotification, secret: string): Promise<number | undefined>;
    class Service {
        /**
         * Create Broadcast notification object
         * @param {BroadcastCompileParm} param parameters for compilation
         * @returns {BroadCastANotification} BroadCastANotification value
         */
        static compile(param: BroadcastCompileParm): BroadCastANotification;
    }
}
