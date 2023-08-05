/**
 * Buka class for lot of standard strings and whatnot
 */
export class Buka {
  public static linklyEndpoint = "https://app.linklyhq.com/api/v1/link";
  public static linklyWorkspace = 111178;
  public static checkoutDomain = "checkout.buka.direct";
  public static console = "console.buka.direct";
  public static businessUniLink = "app.buka.direct/business";
  public static website = "buka.direct";
  public static groupEmail = "team@boka.direct";
  public static founderEmail = "confidence@jackmay.org";
  public static appUniLink = "buka.direct/app";
  public static defaultEmailSender = "Jackmay from Buka<hello@buka.direct>";
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
}

export namespace Buka {
  export enum AppIdentifier{
    android = "org.jackmay.afikana",
    ios = "app.rebat.afroSalong",
    iosID = "1593979273",
    businessAndroid = "business.buka.direct",
    businessIOS = "business.buka.direct",
    businessIosID = "6450372812",
  }
  export enum Links{
    mePrefix = "https://me.buka.direct",
    mPrefix = "https://m.buka.direct",
  }
}