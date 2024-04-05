import { Twilio } from "twilio";
import { TwilioConfig, TwiloData } from "..";

/**
 * Sms service
 */
export class SMSservice {
  twilio: TwilioConfig;
  readonly client: Twilio;

  /**
   * Class main constructor
   * @param {TwilioConfig} configs initialize with stripe keys
   */
  constructor(configs: TwilioConfig) {
    this.twilio = configs;
    this.client = new Twilio(configs.sid, configs.auth);
  }

  /**
   * send text sms
   * @param {string} message body of sms
   * @param {string} to number
   * @return {TwiloData | undefined} data
   */
  public async sendTextMessage(
    message: string, to: string):
    Promise<TwiloData | undefined> {
    let data: TwiloData | undefined;

    return await this.client.messages
      .create({
        messagingServiceSid: this.twilio.messenger,
        to: to,
        body: message,
      })
      .then((value) => {
        const result = JSON.parse(JSON.stringify(value));
        data = TwiloData.fromJson(result);
        console.debug("SMS sent to: " + to +
          " data = " + JSON.stringify(data));
        return data;
      });
  }
}
