import {Status } from "../enums/documents";

/**
 * Buka class for lot of standard strings and whatnot
 */
export class Buka {
  public static linklyEndpoint = "https://app.linklyhq.com/api/v1/link";
  public static linklyWorkspace = 111178;
  public static charge = 0.1;
  public static checkoutDomain = "checkout.buka.direct";
  public static console = "console.buka.direct";
  public static paysuccessUrl = "https://app.buka.direct/payments/successful";
  public static payfailureUrl = "https://app.buka.direct/payments/failed";
  public static businessUniLink = "app.buka.direct/business";
  public static website = "buka.direct";
  public static groupEmail = "team@boka.direct";
  public static founderEmail = "confidence@jackmay.org";
  public static defaultEmailSender = "Alal from akub (previously Buka)<hello@buka.direct>";
  public static appDescription = "Apply Buka Direct to easily make free beauty" +
    " reservations and make real-time payments to thousands of service " +
    "providers in the health and beauty sector. Create an account right" +
    " away to receive a free reservation.";
  public static appShareTitle = "Buka Direct: Simple Safe Reservations " +
    "- Apps on Google and Apple Play Store";

  /**
  * generate email sender
  * @param {string} name name of the sender
  * @param {string} email email of the sender
  * @return {string} returns sender
  */
  public static createEmailSender(name: string,
    email?: string): string {
    return `${name}<${email ?? "hello@buka.direct"}>`;
  }

  /**
   * build dynamic long link
   * @param {string} head link header
   * @param {string} param link parameters
   * @param {boolean} console if we should use console link
   * @return {string} returns link
   */
  public static linkBuilder(head: string,
    param: string, console = false): string {
    return `https://${console ?
      "app." : ""}buka.direct/${head}?${param}`;
  }

  /**
   * build link
   * @param {string} booking id of document
   * @param {number} date timestamp of start
   * @return {string} returns link
   */
  public static businessBookingLink(
    booking: string, date: number): string {
    return `https://partners.withakub.com/app/calendar/booking/${booking}?date=${date}`;
  }
  
  /**
   * build link
   * @param {string} booking id of document
   * @return {string} returns link
   */
  public static userBookingLink(
    booking: string): string {
    return `https://www.akub.co/app/activity/${booking}`;
  }
}

export namespace AkubSpace {
  export enum AppIdentifier{
    android = "org.jackmay.afikana",
    ios = "app.rebat.afroSalong",
    iosID = "1593979273",
    businessAndroid = "direct.buka.business",
    businessIOS = "direct.buka.business",
    businessIosID = "6450372812",
    uniLink = "akub://",
    uniDomain = "https://withakub.com"
  }

  export enum Links{
    mePrefix = "https://me.buka.direct",
    mPrefix = "https://m.buka.direct",
    console = "https://partners.withakub.com",
    consoleDebug = "http://localhost:5000",
    download = "https://getakub.com",
    domain = "https://akub.co",
    debugApiUri = "http://127.0.0.1:5001/afikanna-f2aa1/us-central1",
    debugPayApiUri = "http://127.0.0.1:5001/afikanna-f2aa1/us-central1/pay-api",
    debugPayUI = "http://localhost:5100",
    payments = "https://pay.withakub.com",
    paymentApiUri = "https://payments.withakub.com",
    apiUri = "https://api.akub.co",
  }

  export enum PaymentProviders{
    stripe = "stripe",
    tink = "tink",
    swish = "swish",
  }
  
  export function refillAmount(credit: string): number {
    switch (credit) {
      case "200":
        return 20;
      case "500":
        return 50;
      case "2000":
        return 200;
      case "1000":
        return 100;
      default:
        return Number.parseInt(credit);
    }
  }

  export class helpers {
    
    /**
     * Create a pay request identifier
     * @param {string} token payment identifier ie. payment_uuid
     * @param {boolean} debug is payment ran in debug mode
     * @return {string} returns value.
     */
    public static buildPaymentLink(token: string, debug = false): string {
      return `${debug ? Links.debugPayUI : Links.payments}/${token.split("_")[1].trim()}`;
    }
    
    /**
     * Create a invitation url
     * @param {string} token payment identifier ie. payment_uuid
     * @param {boolean} debug is payment ran in debug mode
     * @return {string} returns value.
     */
    public static buildInvitationUrl(token: string, debug = false): string {
      return `${debug ? Links.consoleDebug : Links.console}/invitation/${token}`;
    }
    
    /**
     * Create a swish pay link
     * @param {string} identifier swish number
     * @param {number} amount to be paid
     * @return {string} returns value.
     */
    public static buildSwishLink(identifier: string, amount: number): string {
      return `https://app.swish.nu/1/p/sw/?sw=${identifier}&amt=${amount}&cur=SEK&msg=Pay%20for%20service&src=qr`
    }
    
    /**
     * Create payment view link for console
     * @param {string} id payment identifier ie. payment_uuid
     * @param {boolean} debug is payment ran in debug mode
     * @return {string} returns value.
     */
    public static buildConsolePayView(id: string, debug = false): string {
      return `${debug ? Links.debugPayUI : Links.console}/app/payments/${id}`;
    }   
    
    /**
     * Create payment redirect for normal checkout
     * @param {string} type checkout type i.e sms-refill | subscription
     * @param {string} status what the status i.e success or fail
     * @param {boolean} debug is payment ran in debug mode
     * @return {string} returns value.
     */
    public static buildCheckoutRedirect(type: string, status: string, debug = false): string {
      return `${debug ? Links.debugPayApiUri :
        Links.paymentApiUri}/checkout/${type}/${status}`;
    }
    
    /**
     * Create a request identifier
     * @param {string} token payment identifier ie. payment_uuid
     * @param {Status} status payment status
     * @param {boolean} debug is payment ran in debug mode
     * @return {string} returns value.
     */
    public static buildPaymentRedirect(token: string, status: Status, debug = false): string {
      return `${debug ? Links.debugPayApiUri :
        Links.paymentApiUri}/payment/v1/?identifier=${token}&action=${status}&checkout={CHECKOUT_SESSION_ID}`;
    }
  }
}

/* eslint-disable */
export function parseInterface(data: any) {
  return JSON.parse(JSON.stringify(data));
}