"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInterface = exports.AkubSpace = exports.Buka = void 0;
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
    /**
     * build link
     * @param {string} booking id of document
     * @param {number} date timestamp of start
     * @return {string} returns link
     */
    static businessBookingLink(booking, date) {
        return `https://partners.withakub.com/app/calendar/booking/${booking}?date=${date}`;
    }
    /**
     * build link
     * @param {string} booking id of document
     * @return {string} returns link
     */
    static userBookingLink(booking) {
        return `https://www.akub.co/app/activity/${booking}`;
    }
}
exports.Buka = Buka;
Buka.linklyEndpoint = "https://app.linklyhq.com/api/v1/link";
Buka.linklyWorkspace = 111178;
Buka.charge = 0.1;
Buka.checkoutDomain = "checkout.buka.direct";
Buka.console = "console.buka.direct";
Buka.paysuccessUrl = "https://app.buka.direct/payments/successful";
Buka.payfailureUrl = "https://app.buka.direct/payments/failed";
Buka.businessUniLink = "app.buka.direct/business";
Buka.website = "buka.direct";
Buka.groupEmail = "team@boka.direct";
Buka.founderEmail = "confidence@jackmay.org";
Buka.defaultEmailSender = "Alal from akub (previously Buka)<hello@buka.direct>";
Buka.appDescription = "Apply Buka Direct to easily make free beauty" +
    " reservations and make real-time payments to thousands of service " +
    "providers in the health and beauty sector. Create an account right" +
    " away to receive a free reservation.";
Buka.appShareTitle = "Buka Direct: Simple Safe Reservations " +
    "- Apps on Google and Apple Play Store";
var AkubSpace;
(function (AkubSpace) {
    let AppIdentifier;
    (function (AppIdentifier) {
        AppIdentifier["android"] = "org.jackmay.afikana";
        AppIdentifier["ios"] = "app.rebat.afroSalong";
        AppIdentifier["iosID"] = "1593979273";
        AppIdentifier["businessAndroid"] = "direct.buka.business";
        AppIdentifier["businessIOS"] = "direct.buka.business";
        AppIdentifier["businessIosID"] = "6450372812";
        AppIdentifier["uniLink"] = "akub://";
        AppIdentifier["uniDomain"] = "https://withakub.com";
    })(AppIdentifier = AkubSpace.AppIdentifier || (AkubSpace.AppIdentifier = {}));
    let Links;
    (function (Links) {
        Links["mePrefix"] = "https://me.buka.direct";
        Links["mPrefix"] = "https://m.buka.direct";
        Links["console"] = "https://partners.withakub.com";
        Links["consoleDebug"] = "http://localhost:5000";
        Links["download"] = "https://getakub.com";
        Links["domain"] = "https://akub.co";
        Links["debugApiUri"] = "http://127.0.0.1:5001/afikanna-f2aa1/us-central1";
        Links["debugPayApiUri"] = "http://127.0.0.1:5001/afikanna-f2aa1/us-central1/pay-api";
        Links["debugPayUI"] = "http://localhost:5100";
        Links["payments"] = "https://pay.withakub.com";
        Links["paymentApiUri"] = "https://payments.withakub.com";
        Links["apiUri"] = "https://api.akub.co";
    })(Links = AkubSpace.Links || (AkubSpace.Links = {}));
    let PaymentProviders;
    (function (PaymentProviders) {
        PaymentProviders["stripe"] = "stripe";
        PaymentProviders["tink"] = "tink";
        PaymentProviders["swish"] = "swish";
    })(PaymentProviders = AkubSpace.PaymentProviders || (AkubSpace.PaymentProviders = {}));
    class helpers {
        /**
         * Create a pay request identifier
         * @param {string} token payment identifier ie. payment_uuid
         * @param {boolean} debug is payment ran in debug mode
         * @return {string} returns value.
         */
        static buildPaymentLink(token, debug = false) {
            return `${debug ? Links.debugPayUI : Links.payments}/${token.split("_")[1].trim()}`;
        }
        /**
         * Create a swish pay link
         * @param {string} identifier swish number
         * @param {number} amount to be paid
         * @return {string} returns value.
         */
        static buildSwishLink(identifier, amount) {
            return `https://app.swish.nu/1/p/sw/?sw=${identifier}&amt=${amount}&cur=SEK&msg=Pay%20for%20service&src=qr`;
        }
        /**
         * Create payment view link for console
         * @param {string} id payment identifier ie. payment_uuid
         * @param {boolean} debug is payment ran in debug mode
         * @return {string} returns value.
         */
        static buildConsolePayView(id, debug = false) {
            return `${debug ? Links.debugPayUI : Links.console}/app/payments/${id}`;
        }
        /**
         * Create a request identifier
         * @param {string} token payment identifier ie. payment_uuid
         * @param {Status} status payment status
         * @param {boolean} debug is payment ran in debug mode
         * @return {string} returns value.
         */
        static buildPaymentRedirect(token, status, debug = false) {
            return `${debug ? Links.debugPayApiUri :
                Links.paymentApiUri}/payment/v1/?identifier=${token}&action=${status}&checkout={CHECKOUT_SESSION_ID}`;
        }
    }
    AkubSpace.helpers = helpers;
})(AkubSpace = exports.AkubSpace || (exports.AkubSpace = {}));
/* eslint-disable */
function parseInterface(data) {
    return JSON.parse(JSON.stringify(data));
}
exports.parseInterface = parseInterface;
//# sourceMappingURL=buka.js.map