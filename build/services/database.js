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
exports.DatabaseFunctions = void 0;
const labs_sharable_1 = require("labs-sharable");
const __1 = require("..");
const model_1 = require("../modules/models/booking/model");
// const cred: admin.ServiceAccount = {
//   privateKey: serviceAccount.private_key,
//   projectId: serviceAccount.project_id,
//   clientEmail: serviceAccount.client_email,
// };
// admin.initializeApp({
//   projectId: serviceAccount.project_id,
//   credential: admin.credential.cert(cred),
//   databaseURL: "https://afikanna-f2aa1-default-rtdb.europe-west1.firebasedatabase.app/",
//   storageBucket: "gs://afikanna-f2aa1.appspot.com",
// });
// const db = admin.firestore();
var DatabaseFunctions;
(function (DatabaseFunctions) {
    /**
     * Database helper class
     */
    class getters {
        constructor(admin) {
            this.db = admin;
        }
        /**
       * Go to database user collection and get all
       * available users
       * @return {Promise<UserModel[]>} returns list.
       */
        retrieveUsers() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield this.db.collection(__1.DocumentReference.users).get();
                return source.docs.map((e) => {
                    const user = new __1.UserModel();
                    user.fromJson(e.data());
                    return user;
                });
            });
        }
        /**
         * Go to database business collection and get all
         * @return {Promise<Business[]>} returns OrganisationData list.
         */
        retrieveBusinesses() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield this.db.collection(__1.DocumentReference.business).get();
                return source.docs.map((e) => __1.Business.fromJson(e.data()));
            });
        }
        /**
         * Go to database collection and get all
         * @return {Promise<ConsoleUser[]>} returns OrganisationData list.
         */
        retrieveConsoleUsers() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield this.db.collection(__1.DocumentReference.business).get();
                return source.docs.map((e) => __1.ConsoleUser.fromJson(e.data()));
            });
        }
        /**
         * Go to database reservation collection and get all
         * available documents
         * @return {Promise<Reservation[]>} returns OrganisationData list.
         */
        retrieveReservations() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield this.db.collection(__1.DocumentReference.reservation).get();
                return source.docs.map((e) => e.data()['activity'] !== undefined ?
                    model_1.Booking.fromJson(e.data()) : __1.ReservationData.fromJson(e.data()));
            });
        }
        /**
         * Go to database reservation's bookings and get all
         * available documents
         * @param {string} reference document id for Reservation doc
         * @return {Promise<BookingData[]>} returns OrganisationData list.
         */
        retrieveReservationBookings(reference) {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield this.db.collection(__1.DocumentReference.
                    reservation).doc(reference)
                    .collection(__1.DocumentReference.booking).get();
                return source.docs.map((e) => __1.BookingData.fromJson(e.data()));
            });
        }
        /**
         * Go to database reservation's bookings and get all
         * available documents
         * @param {string} reference document id for Reservation doc
         * @return {Promise<BookingNote[]>} returns OrganisationData list.
         */
        retrieveBookingNotes(reference) {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield this.db.collection(__1.DocumentReference.
                    reservation).doc(reference)
                    .collection(__1.DocumentReference.notes).get();
                return source.docs.map((e) => (0, __1.parseInterface)(e.data()));
            });
        }
        /**
          * Go to database payments collection and get all
          * available payment documents
          * @return {Promise<PaymentRequest.Model[]>} returns OrganisationData list.
          */
        retrieveAllPayments() {
            return __awaiter(this, void 0, void 0, function* () {
                const source = yield this.db.collection(__1.DocumentReference.payments).get();
                return source.docs.map((e) => __1.PaymentRequest.Model.fromJson(e.data()));
            });
        }
        /**
         * A power function used to check if firestore document exist
         * @param {string} docID reference id
         * @param {string} collectionPath string path of collection
         *  i.e users/{user}/notification
         * @return {Promise<boolean>} nothing
         */
        doesDocumentExist(docID, collectionPath) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = yield this.db.
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
        constructor(admin) {
            this.db = admin;
        }
        /**
       * update stripe information for users
       * @param {UserModel} user user model
       * @return {Promise<void>} returns na
       */
        updateStripeInformation(user) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.createOrUpdateFirebaseDocument(user.
                    id.replace(__1.DocumentTypes.user, ""), __1.DocumentReference.users, {
                    "stripe": user.stripe,
                }, false);
            });
        }
        /**
         * Update payment document
         * @param {string} id the payment document id
         * @param {Record<string, unknown>} data map to update with
         * @return {Promise<void>} void.
         */
        updatePaymentDoc(id, data) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.db.
                    collection(__1.DocumentReference.payments).doc(id)
                    .update(data);
            });
        }
        /**
         * Update booking document
         * @param {Booking} booking the booking model
         * @param {Record<string, unknown>} data what to update
         * @return {Promise<void>} void.
         */
        updateBooking(booking, data) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.db.
                    collection(__1.DocumentReference.reservation).
                    doc(booking.id)
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
        createOrUpdateFirebaseDocument(docID, collectionPath, data, setter = true) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = this.db.collection(collectionPath).doc(docID);
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
        attachNotificationTray(tray) {
            return __awaiter(this, void 0, void 0, function* () {
                if (tray.notification.id.length < 1) {
                    throw new labs_sharable_1.CustomError("Notification id must be greater than 1");
                }
                // console.log(`To: ${tray.notification.to}`);
                let source;
                if (tray.notification.to.startsWith("org")) {
                    source = this.db.collection(__1.DocumentReference.business)
                        .doc(tray.notification.to)
                        .collection(__1.DocumentReference.notifications);
                }
                else if (tray.notification.to.startsWith("user")) {
                    source = this.db.collection(__1.DocumentReference.users)
                        .doc(tray.notification.to.split("_")[1])
                        .collection(__1.DocumentReference.notifications);
                }
                else {
                    source = undefined;
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