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
    /**
     * build dynamic long link
     * @param {string} head link header
     * @param {string} param link parameters
     * @param {boolean} console if we should use console link
     * @return {string} returns link
     */
    static linkBuilder(head, param, console = false) {
        return `https://${console ?
            "app." : ""}buka.direct/${head}?${param}`;
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
Buka.appDescription = "Apply Buka Direct to easily make free beauty" +
    " reservations and make real-time payments to thousands of service " +
    "providers in the health and beauty sector. Create an account right" +
    " away to receive a free reservation.";
Buka.appShareTitle = "Buka Direct: Simple Safe Reservations " +
    "- Apps on Google and Apple Play Store";
(function (Buka) {
    let AppIdentifier;
    (function (AppIdentifier) {
        AppIdentifier["android"] = "org.jackmay.afikana";
        AppIdentifier["ios"] = "app.rebat.afroSalong";
        AppIdentifier["iosID"] = "1593979273";
        AppIdentifier["businessAndroid"] = "business.buka.direct";
        AppIdentifier["businessIOS"] = "business.buka.direct";
        AppIdentifier["businessIosID"] = "6450372812";
    })(AppIdentifier = Buka.AppIdentifier || (Buka.AppIdentifier = {}));
    let Links;
    (function (Links) {
        Links["mePrefix"] = "https://me.buka.direct";
        Links["mPrefix"] = "https://m.buka.direct";
    })(Links = Buka.Links || (Buka.Links = {}));
})(Buka = exports.Buka || (exports.Buka = {}));
//# sourceMappingURL=buka.js.map