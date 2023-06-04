import {
  BroadCastANotification, CustomError,
  UserModel, compactNotification,
  generateRandomAlphaNumeric, notificationID,
  unixTimeStampNow
} from "labs-sharable";
import { BroadcastCompileParm } from "../interfaces/account";
import { OrganisationData } from "../models/clients";
import { NotificationSounds } from "labs-sharable/dist/modules/fcm_models";
import { NotificationChannels, NotificationType } from "../enums/documents";

/**
 * Serverless Messaging broadcast service
 */
export class BroadCastService {

  /**
   * Create Broadcast notification object
   * @param {BroadcastCompileParm} param parameters for compilation 
   * @returns {BroadCastANotification} BroadCastANotification value
   */
  public static compile(param: BroadcastCompileParm):
    BroadCastANotification {
    
    if (param.receiver === undefined ||
      param.sender === undefined) {
      throw new 
      CustomError("Either receiver or sender was found to be null");
    }

    const type = param.type ?? NotificationType.Message;

    const noTray: boolean = param.receiver instanceof UserModel &&
      (param.receiver as UserModel).id.startsWith("ba_");

    return compactNotification({
      payload: param.receiver instanceof OrganisationData ? undefined:{
        title: param.title,
        to: (param.receiver as UserModel).fcm?.token ?? "",
        ios: (param.receiver as UserModel).fcm?.isIOS() ?? false,
        id: generateRandomAlphaNumeric(5),
        type: type,
        channel: param.channel ?? NotificationChannels.Critical,
        body: param.message,
        image: param.sender instanceof OrganisationData ?
          (param.sender as OrganisationData).logo :
          (param.sender as UserModel).picture?.main ?? "",
        args: param.fcmargs,
        iosData: {
          title: param.title,
          body: param.message,
          sound: NotificationSounds.Default,
        },
      },
      trayItem: noTray ? undefined :{
        type: type,
        to: param.receiver instanceof OrganisationData ?
          (param.receiver as OrganisationData).memberID :
          (param.receiver as UserModel).id,
        uid: param.sender.id,
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