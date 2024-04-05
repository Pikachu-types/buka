import { Twilio } from "twilio";
import { TwilioConfig, TwiloData } from "..";
/**
 * Sms service
 */
export declare class SMSservice {
    twilio: TwilioConfig;
    readonly client: Twilio;
    /**
     * Class main constructor
     * @param {TwilioConfig} configs initialize with stripe keys
     */
    constructor(configs: TwilioConfig);
    /**
     * send text sms
     * @param {string} message body of sms
     * @param {string} to number
     * @return {TwiloData | undefined} data
     */
    sendTextMessage(message: string, to: string): Promise<TwiloData | undefined>;
}
