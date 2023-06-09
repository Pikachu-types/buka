"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buka = void 0;
/**
 * Buka class for lot of standard strings and whatnot
 */
class Buka {
    /**
    * generate email sender
    * @param {string} name name of the sender
    * @param {string} email email of the sender
    * @return {string} returns sender
    */
    static createEmailSender(name, email) {
        return `${name}<${email !== null && email !== void 0 ? email : "hello@buka.direct"}>`;
    }
}
exports.Buka = Buka;
Buka.linklyEndpoint = "https://app.linklyhq.com/api/v1/link";
Buka.linklyWorkspace = 111178;
Buka.checkoutDomain = "checkout.buka.direct";
Buka.console = "console.buka.direct";
Buka.businessUniLink = "app.buka.direct/business";
Buka.website = "buka.direct";
Buka.groupEmail = "team@boka.direct";
Buka.founderEmail = "confidence@jackmay.org";
Buka.appUniLink = "buka.direct/app";
Buka.defaultEmailSender = "Jackmay from Buka<hello@buka.direct>";
//# sourceMappingURL=buka.js.map