import { LocalNotification } from "labs-sharable";
import * as admin from "firebase-admin";
import { BookingData, Business, ConsoleUser, UserModel, PaymentRequest, Reservation } from "..";
import { Booking } from "../modules/models/booking/model";
import { BookingNote } from "../modules/models/booking/shared";
export declare namespace DatabaseFunctions {
    /**
     * Database helper class
     */
    class getters {
        readonly db: admin.firestore.Firestore;
        constructor(admin: admin.firestore.Firestore);
        /**
       * Go to database user collection and get all
       * available users
       * @return {Promise<UserModel[]>} returns list.
       */
        retrieveUsers(): Promise<UserModel[]>;
        /**
         * Go to database business collection and get all
         * @return {Promise<Business[]>} returns OrganisationData list.
         */
        retrieveBusinesses(): Promise<Business[]>;
        /**
         * Go to database collection and get all
         * @return {Promise<ConsoleUser[]>} returns OrganisationData list.
         */
        retrieveConsoleUsers(): Promise<ConsoleUser[]>;
        /**
         * Go to database reservation collection and get all
         * available documents
         * @return {Promise<Reservation[]>} returns OrganisationData list.
         */
        retrieveReservations(): Promise<Reservation[]>;
        /**
         * Go to database reservation's bookings and get all
         * available documents
         * @param {string} reference document id for Reservation doc
         * @return {Promise<BookingData[]>} returns OrganisationData list.
         */
        retrieveReservationBookings(reference: string): Promise<BookingData[]>;
        /**
         * Go to database reservation's bookings and get all
         * available documents
         * @param {string} reference document id for Reservation doc
         * @return {Promise<BookingNote[]>} returns OrganisationData list.
         */
        retrieveBookingNotes(reference: string): Promise<BookingNote[]>;
        /**
          * Go to database payments collection and get all
          * available payment documents
          * @return {Promise<PaymentRequest.Model[]>} returns OrganisationData list.
          */
        retrieveAllPayments(): Promise<PaymentRequest.Model[]>;
        /**
         * A power function used to check if firestore document exist
         * @param {string} docID reference id
         * @param {string} collectionPath string path of collection
         *  i.e users/{user}/notification
         * @return {Promise<boolean>} nothing
         */
        doesDocumentExist(docID: string, collectionPath: string): Promise<boolean>;
    }
    /**
     * Database management setters, updates and deletes
     */
    class management {
        readonly db: admin.firestore.Firestore;
        constructor(admin: admin.firestore.Firestore);
        /**
       * update stripe information for users
       * @param {UserModel} user user model
       * @return {Promise<void>} returns na
       */
        updateStripeInformation(user: UserModel): Promise<void>;
        /**
         * Update payment document
         * @param {string} id the payment document id
         * @param {Record<string, unknown>} data map to update with
         * @return {Promise<void>} void.
         */
        updatePaymentDoc(id: string, data: Record<string, unknown>): Promise<void>;
        /**
         * Update booking document
         * @param {Booking} booking the booking model
         * @param {Record<string, unknown>} data what to update
         * @return {Promise<void>} void.
         */
        updateBooking(booking: Booking, data: Record<string, unknown>): Promise<void>;
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
        createOrUpdateFirebaseDocument(docID: string, collectionPath: string, data: Record<string, unknown>, setter?: boolean): Promise<void>;
        /**
         * Attach notification object
         * @param {LocalNotification} tray client reference
         * @return {Promise<UserModel[]>} returns list.
         */
        attachNotificationTray(tray: LocalNotification): Promise<void>;
    }
}
