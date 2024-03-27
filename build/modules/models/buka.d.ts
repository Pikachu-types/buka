import { Status } from "../enums/documents";
/**
 * Buka class for lot of standard strings and whatnot
 */
export declare class Buka {
    static linklyEndpoint: string;
    static linklyWorkspace: number;
    static charge: number;
    static checkoutDomain: string;
    static console: string;
    static paysuccessUrl: string;
    static payfailureUrl: string;
    static businessUniLink: string;
    static website: string;
    static groupEmail: string;
    static founderEmail: string;
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
export declare namespace AkubSpace {
    enum AppIdentifier {
        android = "org.jackmay.afikana",
        ios = "app.rebat.afroSalong",
        iosID = "1593979273",
        businessAndroid = "direct.buka.business",
        businessIOS = "direct.buka.business",
        businessIosID = "6450372812",
        uniLink = "akub://",
        uniDomain = "https://withakub.com"
    }
    enum Links {
        mePrefix = "https://me.buka.direct",
        mPrefix = "https://m.buka.direct",
        console = "https://partners.akub.co",
        consoleDebug = "http://localhost:5000",
        download = "https://getakub.com",
        domain = "https://akub.co",
        debugApiUri = "http://127.0.0.1:5001/afikanna-f2aa1/us-central1",
        debugPayApiUri = "http://127.0.0.1:5001/afikanna-f2aa1/us-central1/pay-api",
        debugPayUI = "http://localhost:5100",
        payments = "https://pay.withakub.com",
        paymentApiUri = "https://payments.withakub.com",
        apiUri = "https://api.akub.co"
    }
    enum PaymentProviders {
        stripe = "stripe",
        tink = "tink",
        swish = "swish"
    }
    class helpers {
        /**
         * Create a pay request identifier
         * @param {string} token payment identifier ie. payment_uuid
         * @param {boolean} debug is payment ran in debug mode
         * @return {string} returns value.
         */
        static buildPaymentLink(token: string, debug?: boolean): string;
        /**
         * Create payment view link for console
         * @param {string} id payment identifier ie. payment_uuid
         * @param {boolean} debug is payment ran in debug mode
         * @return {string} returns value.
         */
        static buildConsolePayView(id: string, debug?: boolean): string;
        /**
         * Create a request identifier
         * @param {string} token payment identifier ie. payment_uuid
         * @param {Status} status payment status
         * @param {boolean} debug is payment ran in debug mode
         * @return {string} returns value.
         */
        static buildPaymentRedirect(token: string, status: Status, debug?: boolean): string;
    }
}
export declare function parseInterface(data: any): any;
