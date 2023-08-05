import { Locales, NewReservationNotify } from "../modules";

export namespace Localization {

  export enum English {
    date = "date",
  }

  export class Texts {

    /**
     * r
     * Reservation text
     * @param {NewReservationNotify} notify reservation notification 
     * @return {OrganisationData | undefined} found object else undefined
   */
    public static reservationSMSNotify(notify: NewReservationNotify)
      : string {
      let message = "";
      if (notify.locale === Locales.en) {
        message = `New Reservation for ${notify.business}.

Date: ${notify.date}

View reservation here: ${notify.link}`
          ;
        
        if (notify.chatLink !== undefined) {
          message = message + `
Start a conversation: ${notify.chatLink}`;
        }
      }
      else if (notify.locale === Locales.sv) {
        message =  `Ny reservation för ${notify.business}.

Datum: ${notify.date}

Se bokning här: ${notify.link}`
          ;
        
        if (notify.chatLink !== undefined) {
          message = message + `
Starta en konversation: ${notify.chatLink}`;
        }
      }

      return message;
    }
  }
}