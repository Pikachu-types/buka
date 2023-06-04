import { NotificationRestriction, UserModel } from "labs-sharable";
import { OrganisationData } from "../models/clients";
import { FCMArgs } from "labs-sharable/dist/modules/fcm_models";
import { ExtraNotificationTrayData } from "labs-sharable/dist/modules/notifications";
/**
 * Account type
 */
export type Account = UserModel | OrganisationData | undefined;
/**
 * Interface for BroadCastService compile function
 */
export interface BroadcastCompileParm {
    receiver: Account;
    sender: Account;
    message: string;
    title: string;
    restriction: NotificationRestriction;
    type?: string;
    channel?: string;
    fcmargs?: FCMArgs;
    trayExtra?: ExtraNotificationTrayData;
}
