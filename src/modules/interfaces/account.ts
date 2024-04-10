import { NotificationRestriction } from "labs-sharable";
import { OrganisationData } from "../models/clients";
import { FCMArgs } from "labs-sharable/dist/modules/fcm_models";
import { ExtraNotificationTrayData } from "labs-sharable/dist/modules/notifications";
import { UserModel } from "../models/user";
import { Business } from "../models/console/business";
import { ConsoleUser } from "../models/console/user";
import { Booking } from "../models/booking/model";
import { ReservationData } from "../models/booking";

/**
 * Account type
 */
export type Account = UserModel | OrganisationData | Business | ConsoleUser | undefined;

/**
 * To contain old document types and new ones for booking purposes
 */
export type Reservation = Booking | ReservationData | undefined;

/**
 * Interface for BroadCastService compile function
 */
export interface BroadcastCompileParm {
    receiver: Account;
    to: {
        fcm: string,
        ios: boolean,
        id: string
    }
    sender?: Account;
    message: string;
    title: string;
    restriction: NotificationRestriction;
    type?: string;
    channel?: string;
    fcmargs?: FCMArgs;
    trayExtra?: ExtraNotificationTrayData;
}