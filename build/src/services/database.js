"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.DatabaseFunctions = void 0;
const labs_sharable_1 = require("labs-sharable");
const serviceAccount = require("../../service-key.json");
const admin = __importStar(require("firebase-admin"));
const __1 = require("..");
const cred = {
    privateKey: serviceAccount.private_key,
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
};
admin.initializeApp({
    projectId: serviceAccount.project_id,
    credential: admin.credential.cert(cred),
    databaseURL: "https://afikanna-f2aa1-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "gs://afikanna-f2aa1.appspot.com",
});
const db = admin.firestore();
var DatabaseFunctions;
(function (DatabaseFunctions) {
    /**
     * Database helper class
     */
    class getters {
        /**
       * Go to database user collection and get all
       * available users
       * @return {Promise<UserModel[]>} returns list.
       */
        static retrieveUsers() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield db.collection(__1.DocumentReference.users).get();
                return source.docs.map((e) => {
                    const user = new labs_sharable_1.UserModel();
                    user.fromJson(e.data());
                    return user;
                });
            });
        }
        /**
         * Go to database business collection and get all
         * @return {Promise<Business[]>} returns OrganisationData list.
         */
        static retrieveBusinesses() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield db.collection(__1.DocumentReference.business).get();
                return source.docs.map((e) => __1.Business.fromJson(e.data()));
            });
        }
        /**
         * Go to database collection and get all
         * @return {Promise<ConsoleUser[]>} returns OrganisationData list.
         */
        static retrieveConsoleUsers() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield db.collection(__1.DocumentReference.business).get();
                return source.docs.map((e) => __1.ConsoleUser.fromJson(e.data()));
            });
        }
        /**
         * Go to database reservation collection and get all
         * available documents
         * @return {Promise<ReservationData[]>} returns OrganisationData list.
         */
        static retrieveReservations() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield db.collection(__1.DocumentReference.reservation).get();
                return source.docs.map((e) => __1.ReservationData.fromJson(e.data()));
            });
        }
        /**
         * Go to database reservation's bookings and get all
         * available documents
         * @param {string} reference document id for Reservation doc
         * @return {Promise<BookingData[]>} returns OrganisationData list.
         */
        static retrieveReservationBookings(reference) {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield db.collection(__1.DocumentReference.
                    reservation).doc(reference)
                    .collection(__1.DocumentReference.booking).get();
                return source.docs.map((e) => __1.BookingData.fromJson(e.data()));
            });
        }
        /**
         * Go to database payments collection and get all
         * available documents
         * @return {Promise<PaymentLinkRequest[]>} returns OrganisationData list.
         */
        static retrieveAllPayments() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield db.collection(__1.DocumentReference.payments).get();
                return source.docs.map((e) => __1.PaymentLinkRequest.fromJson(e.data()));
            });
        }
        /**
         * A power function used to check if firestore document exist
         * @param {string} docID reference id
         * @param {string} collectionPath string path of collection
         *  i.e users/{user}/notification
         * @return {Promise<boolean>} nothing
         */
        static doesDocumentExist(docID, collectionPath) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = yield db.
                    collection(collectionPath).doc(docID).get();
                return query.exists;
            });
        }
    }
    DatabaseFunctions.getters = getters;
    /**
     * Database management setters, updates and deletes
     */
    class management {
        /**
         * Update payment document
         * @param {string} id the payment document id
         * @param {Record<string, unknown>} data map to update with
         * @return {Promise<void>} void.
         */
        static updatePaymentDoc(id, data) {
            return __awaiter(this, void 0, void 0, function* () {
                yield db.
                    collection(__1.DocumentReference.payments).doc(id)
                    .update(data);
            });
        }
        /**
         * Update booking document
         * @param {string} booking the booking model
         * @param {string} data what to update
         * @return {Promise<void>} void.
         */
        static updateBooking(booking, data) {
            return __awaiter(this, void 0, void 0, function* () {
                yield db.
                    collection(__1.DocumentReference.reservation).
                    doc(booking.reservationID).
                    collection(__1.DocumentReference.booking).doc(booking.id)
                    .update(data);
            });
        }
        /**
         * A power function used to communicate with firestore database
         * @param {string} docID reference id
         * @param {string} collectionPath string path of collection
         *  i.e users/{user}/notification
         * @param {Record<string, unknown>} data record map
         * @param {boolean} setter leave as true if
         * function is to create a new instance of
         * document else edit the request
         * @return {Promise<void>} nothing
         */
        static createOrUpdateFirebaseDocument(docID, collectionPath, data, setter = true) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = db.collection(collectionPath).doc(docID);
                if (setter) {
                    yield query.set(data);
                }
                else {
                    yield query.update(data);
                }
                return;
            });
        }
        /**
         * Attach notification object
         * @param {LocalNotification} tray client reference
         * @return {Promise<UserModel[]>} returns list.
         */
        static attachNotificationTray(tray) {
            return __awaiter(this, void 0, void 0, function* () {
                if (tray.notification.id.length < 1) {
                    throw new labs_sharable_1.CustomError("Notification id must be greater than 1");
                }
                // console.log(`To: ${tray.notification.to}`);
                let source;
                if (tray.notification.to.startsWith("org")) {
                    source = db.collection(__1.DocumentReference.business)
                        .doc(tray.notification.to)
                        .collection(__1.DocumentReference.notifications);
                }
                else {
                    source = db.collection(__1.DocumentReference.users)
                        .doc(tray.notification.to.split("_")[1])
                        .collection(__1.DocumentReference.notifications);
                }
                if (!source)
                    return;
                yield source.doc(tray.notification.id).set(tray.toMap());
            });
        }
    }
    DatabaseFunctions.management = management;
})(DatabaseFunctions = exports.DatabaseFunctions || (exports.DatabaseFunctions = {}));
//# sourceMappingURL=database.js.map