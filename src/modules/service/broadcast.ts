import {
  BroadCastANotification, CustomError,
  compactNotification,
  generateRandomAlphaNumeric, notificationID,
  unixTimeStampNow
} from "labs-sharable";
import { BroadcastCompileParm } from "../interfaces/account";
import { NotificationSounds } from "labs-sharable/dist/modules/fcm_models";
import { NotificationChannels, NotificationType } from "../enums/documents";
import { ConsoleUser } from "../models/console/user";
import { Business } from "../models/console/business";
import { ServerApiClient } from "./api_client";

/**
 * Serverless Messaging broadcast service
 */
export namespace Broadcast {

  /**
   * Send fcm
   * @param compile 
   * @param {string} secret fcm delivery secret key
   * @returns {Promise<number | undefined>}
   */
  export async function send(
    compile: BroadCastANotification, secret: string):
   Promise<number | undefined> {
    if (!compile.fcm) return;
    return await ServerApiClient.cloudMessage(compile.fcm, secret);
  }

  export class Service {

    /**
     * Create Broadcast notification object
     * @param {BroadcastCompileParm} param parameters for compilation 
     * @returns {BroadCastANotification} BroadCastANotification value
     */
    public static compile(param: BroadcastCompileParm):
      BroadCastANotification {

      if (param.receiver === undefined) {
        throw new
          CustomError("Either receiver or sender was found to be null");
      }

      const type = param.type ?? NotificationType.Message;

      const noTray: boolean = ConsoleUser.isOfInstance(param.receiver);

      return compactNotification({
        payload: Business.isOfInstance(param.receiver) ? undefined : {
          title: param.title,
          to: param.to.fcm,
          // to: (param.receiver as UserModel).fcm?.token ?? "",
          ios: param.to.ios,
          id: generateRandomAlphaNumeric(5),
          type: type,
          channel: param.channel ?? NotificationChannels.Critical,
          body: param.message,
          // image: param.sender instanceof OrganisationData ?
          //   (param.sender as OrganisationData).logo :
          //   (param.sender as UserModel).picture?.main ?? "",
          args: param.fcmargs,
          iosData: {
            title: param.title,
            body: param.message,
            sound: NotificationSounds.Default,
          },
        },
        trayItem: noTray ? undefined : {
          type: type,
          to: param.to.id,
          uid: param.sender?.id ?? '',
          unread: true,
          message: param.message,
          time: unixTimeStampNow(),
          restriction: param.restriction,
          id: notificationID(),
          data: param.trayExtra
        }
      });
    }
  }
}