import { NewReservationNotify } from "../modules";
export declare namespace Localization {
    enum English {
        date = "date"
    }
    class Texts {
        /**
         * r
         * Reservation text
         * @param {NewReservationNotify} notify reservation notification
         * @return {OrganisationData | undefined} found object else undefined
       */
        static reservationSMSNotify(notify: NewReservationNotify): string;
    }
}
