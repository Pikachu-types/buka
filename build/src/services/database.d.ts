import { LocalNotification, UserModel } from "labs-sharable";
import { BookingData, Business, ConsoleUser, PaymentLinkRequest, ReservationData } from "..";
export declare namespace DatabaseFunctions {
    /**
     * Database helper class
     */
    class getters {
        /**
       * Go to database user collection and get all
       * available users
       * @return {Promise<UserModel[]>} returns list.
       */
        static retrieveUsers(): Promise<UserModel[]>;
        /**
         * Go to database business collection and get all
         * @return {Promise<Business[]>} returns OrganisationData list.
         */
        static retrieveBusinesses(): Promise<Business[]>;
        /**
         * Go to database collection and get all
         * @return {Promise<ConsoleUser[]>} returns OrganisationData list.
         */
        static retrieveConsoleUsers(): Promise<ConsoleUser[]>;
        /**
         * Go to database reservation collection and get all
         * available documents
         * @return {Promise<ReservationData[]>} returns OrganisationData list.
         */
        static retrieveReservations(): Promise<ReservationData[]>;
        /**
         * Go to database reservation's bookings and get all
         * available documents
         * @param {string} reference document id for Reservation doc
         * @return {Promise<BookingData[]>} returns OrganisationData list.
         */
        static retrieveReservationBookings(reference: string): Promise<BookingData[]>;
        /**
         * Go to database payments collection and get all
         * available documents
         * @return {Promise<PaymentLinkRequest[]>} returns OrganisationData list.
         */
        static retrieveAllPayments(): Promise<PaymentLinkRequest[]>;
        /**
         * A power function used to check if firestore document exist
         * @param {string} docID reference id
         * @param {string} collectionPath string path of collection
         *  i.e users/{user}/notification
         * @return {Promise<boolean>} nothing
         */
        static doesDocumentExist(docID: string, collectionPath: string): Promise<boolean>;
    }
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
        static updatePaymentDoc(id: string, data: Record<string, unknown>): Promise<void>;
        /**
         * Update booking document
         * @param {string} booking the booking model
         * @param {string} data what to update
         * @return {Promise<void>} void.
         */
        static updateBooking(booking: BookingData, data: Record<string, unknown>): Promise<void>;
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
        static createOrUpdateFirebaseDocument(docID: string, collectionPath: string, data: Record<string, unknown>, setter?: boolean): Promise<void>;
        /**
         * Attach notification object
         * @param {LocalNotification} tray client reference
         * @return {Promise<UserModel[]>} returns list.
         */
        static attachNotificationTray(tray: LocalNotification): Promise<void>;
    }
}
