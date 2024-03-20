"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadCastService = void 0;
const labs_sharable_1 = require("labs-sharable");
const clients_1 = require("../models/clients");
const fcm_models_1 = require("labs-sharable/dist/modules/fcm_models");
const documents_1 = require("../enums/documents");
/**
 * Serverless Messaging broadcast service
 */
class BroadCastService {
    /**
     * Create Broadcast notification object
     * @param {BroadcastCompileParm} param parameters for compilation
     * @returns {BroadCastANotification} BroadCastANotification value
     */
    static compile(param) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (param.receiver === undefined ||
            param.sender === undefined) {
            throw new labs_sharable_1.CustomError("Either receiver or sender was found to be null");
        }
        const type = (_a = param.type) !== null && _a !== void 0 ? _a : documents_1.NotificationType.Message;
        const noTray = param.receiver instanceof labs_sharable_1.UserModel &&
            param.receiver.id.startsWith("ba_");
        return (0, labs_sharable_1.compactNotification)({
            payload: param.receiver instanceof clients_1.OrganisationData ? undefined : {
                title: param.title,
                to: (_c = (_b = param.receiver.fcm) === null || _b === void 0 ? void 0 : _b.token) !== null && _c !== void 0 ? _c : "",
                ios: (_e = (_d = param.receiver.fcm) === null || _d === void 0 ? void 0 : _d.isIOS()) !== null && _e !== void 0 ? _e : false,
                id: (0, labs_sharable_1.generateRandomAlphaNumeric)(5),
                type: type,
                channel: (_f = param.channel) !== null && _f !== void 0 ? _f : documents_1.NotificationChannels.Critical,
                body: param.message,
                image: param.sender instanceof clients_1.OrganisationData ?
                    param.sender.logo :
                    (_h = (_g = param.sender.picture) === null || _g === void 0 ? void 0 : _g.main) !== null && _h !== void 0 ? _h : "",
                args: param.fcmargs,
                iosData: {
                    title: param.title,
                    body: param.message,
                    sound: fcm_models_1.NotificationSounds.Default,
                },
            },
            trayItem: noTray ? undefined : {
                type: type,
                to: param.receiver instanceof clients_1.OrganisationData ?
                    param.receiver.memberID :
                    param.receiver.id,
                uid: param.sender.id,
                unread: true,
                message: param.message,
                time: (0, labs_sharable_1.unixTimeStampNow)(),
                restriction: param.restriction,
                id: (0, labs_sharable_1.notificationID)(),
                data: param.trayExtra
            }
        });
    }
}
exports.BroadCastService = BroadCastService;
//# sourceMappingURL=broadcast.js.map