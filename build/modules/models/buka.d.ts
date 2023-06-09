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
    /**
    * generate email sender
    * @param {string} name name of the sender
    * @param {string} email email of the sender
    * @return {string} returns sender
    */
    static createEmailSender(name: string, email?: string): string;
}
