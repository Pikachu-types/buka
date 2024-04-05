"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSservice = void 0;
const twilio_1 = require("twilio");
const __1 = require("..");
/**
 * Sms service
 */
class SMSservice {
    /**
     * Class main constructor
     * @param {TwilioConfig} configs initialize with stripe keys
     */
    constructor(configs) {
        this.twilio = configs;
        this.client = new twilio_1.Twilio(configs.sid, configs.auth);
    }
    /**
     * send text sms
     * @param {string} message body of sms
     * @param {string} to number
     * @return {TwiloData | undefined} data
     */
    sendTextMessage(message, to) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            return yield this.client.messages
                .create({
                messagingServiceSid: this.twilio.messenger,
                to: to,
                body: message,
            })
                .then((value) => {
                const result = JSON.parse(JSON.stringify(value));
                data = __1.TwiloData.fromJson(result);
                console.debug("SMS sent to: " + to +
                    " data = " + JSON.stringify(data));
                return data;
            });
        });
    }
}
exports.SMSservice = SMSservice;
//# sourceMappingURL=sms.js.map