import { NotificationRestriction } from "labs-sharable";
import { OrganisationData } from "../models/clients";
import { FCMArgs } from "labs-sharable/dist/modules/fcm_models";
import { ExtraNotificationTrayData } from "labs-sharable/dist/modules/notifications";
import { UserModel } from "../models/user";
import { Business } from "../models/console/business";
import { ConsoleUser } from "../models/console/user";
/**
 * Account type
 */
export type Account = UserModel | OrganisationData | Business | ConsoleUser | undefined;
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
