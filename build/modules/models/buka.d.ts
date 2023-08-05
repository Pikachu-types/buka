/**
 * Buka class for lot of standard strings and whatnot
 */
export declare class Buka {
    static linklyEndpoint: string;
    static linklyWorkspace: number;
    static checkoutDomain: string;
    static console: string;
    static businessUniLink: string;
    static website: string;
    static groupEmail: string;
    static founderEmail: string;
    static appUniLink: string;
    static defaultEmailSender: string;
    static appDescription: string;
    static appShareTitle: string;
    /**
    * generate email sender
    * @param {string} name name of the sender
    * @param {string} email email of the sender
    * @return {string} returns sender
    */
    static createEmailSender(name: string, email?: string): string;
    /**
     * build dynamic long link
     * @param {string} head link header
     * @param {string} param link parameters
     * @param {boolean} console if we should use console link
     * @return {string} returns link
     */
    static linkBuilder(head: string, param: string, console?: boolean): string;
}
export declare namespace Buka {
    enum AppIdentifier {
        android = "org.jackmay.afikana",
        ios = "app.rebat.afroSalong",
        iosID = "1593979273",
        businessAndroid = "business.buka.direct",
        businessIOS = "business.buka.direct",
        businessIosID = "6450372812"
    }
    enum Links {
        mePrefix = "https://me.buka.direct",
        mPrefix = "https://m.buka.direct"
    }
}
