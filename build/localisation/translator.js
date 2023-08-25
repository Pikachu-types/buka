"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localization = void 0;
const modules_1 = require("../modules");
var Localization;
(function (Localization) {
    let English;
    (function (English) {
        English["date"] = "date";
    })(English = Localization.English || (Localization.English = {}));
    class Texts {
        /**
         * r
         * Reservation text
         * @param {NewReservationNotify} notify reservation notification
         * @return {OrganisationData | undefined} found object else undefined
       */
        static reservationSMSNotify(notify) {
            let message = "";
            if (notify.locale === modules_1.Locales.en) {
                message = `New Reservation for ${notify.business}.

Date: ${notify.date}

View reservation here: ${notify.link}`;
                if (notify.chatLink !== undefined) {
                    message = message + `
\nStart a conversation: ${notify.chatLink}`;
                }
            }
            else if (notify.locale === modules_1.Locales.sv) {
                message = `Ny reservation för ${notify.business}.

Datum: ${notify.date}

Se bokning här: ${notify.link}`;
                if (notify.chatLink !== undefined) {
                    message = message + `
\nStarta en konversation: ${notify.chatLink}`;
                }
            }
            return message;
        }
    }
    Localization.Texts = Texts;
})(Localization = exports.Localization || (exports.Localization = {}));
//# sourceMappingURL=translator.js.map