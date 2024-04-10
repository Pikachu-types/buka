"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Broadcast = void 0;
const labs_sharable_1 = require("labs-sharable");
const fcm_models_1 = require("labs-sharable/dist/modules/fcm_models");
const documents_1 = require("../enums/documents");
const user_1 = require("../models/console/user");
const business_1 = require("../models/console/business");
const api_client_1 = require("./api_client");
/**
 * Serverless Messaging broadcast service
 */
var Broadcast;
(function (Broadcast) {
    /**
     * Send fcm
     * @param compile
     * @param {string} secret fcm delivery secret key
     * @returns {Promise<number | undefined>}
     */
    function send(compile, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!compile.fcm)
                return;
            return yield api_client_1.ServerApiClient.cloudMessage(compile.fcm, secret);
        });
    }
    Broadcast.send = send;
    class Service {
        /**
         * Create Broadcast notification object
         * @param {BroadcastCompileParm} param parameters for compilation
         * @returns {BroadCastANotification} BroadCastANotification value
         */
        static compile(param) {
            var _a, _b, _c, _d;
            if (param.receiver === undefined) {
                throw new labs_sharable_1.CustomError("Either receiver or sender was found to be null");
            }
            const type = (_a = param.type) !== null && _a !== void 0 ? _a : documents_1.NotificationType.Message;
            const noTray = user_1.ConsoleUser.isOfInstance(param.receiver);
            return (0, labs_sharable_1.compactNotification)({
                payload: business_1.Business.isOfInstance(param.receiver) ? undefined : {
                    title: param.title,
                    to: param.to.fcm,
                    // to: (param.receiver as UserModel).fcm?.token ?? "",
                    ios: param.to.ios,
                    id: (0, labs_sharable_1.generateRandomAlphaNumeric)(5),
                    type: type,
                    channel: (_b = param.channel) !== null && _b !== void 0 ? _b : documents_1.NotificationChannels.Critical,
                    body: param.message,
                    // image: param.sender instanceof OrganisationData ?
                    //   (param.sender as OrganisationData).logo :
                    //   (param.sender as UserModel).picture?.main ?? "",
                    args: param.fcmargs,
                    iosData: {
                        title: param.title,
                        body: param.message,
                        sound: fcm_models_1.NotificationSounds.Default,
                    },
                },
                trayItem: noTray ? undefined : {
                    type: type,
                    to: param.to.id,
                    uid: (_d = (_c = param.sender) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : '',
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
    Broadcast.Service = Service;
})(Broadcast = exports.Broadcast || (exports.Broadcast = {}));
//# sourceMappingURL=broadcast.js.map