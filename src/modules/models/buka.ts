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
}