import { CustomError, LocalNotification } from "labs-sharable";
import serviceAccount = require("../../service-key.json");
import * as admin from "firebase-admin";
import { BookingData, Business, ConsoleUser, DocumentReference, DocumentTypes, ReservationData, UserModel, PaymentRequest } from "..";

const cred: admin.ServiceAccount = {
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

export namespace DatabaseFunctions {

  /**
   * Database helper class
   */
  export class getters {
    /**
   * Go to database user collection and get all
   * available users
   * @return {Promise<UserModel[]>} returns list.
   */
    public static async retrieveUsers(): Promise<UserModel[]> {
      const source = await db.collection(DocumentReference.users).get();
      return source.docs.map((e) => {
        const user = new UserModel();
        user.fromJson(e.data());
        return user;
      });
    }


    /**
     * Go to database business collection and get all
     * @return {Promise<Business[]>} returns OrganisationData list.
     */
    public static async retrieveBusinesses(): Promise<Business[]> {
      const source = await db.collection(DocumentReference.business).get();
      return source.docs.map((e) => Business.fromJson(e.data()));
    }

    /**
     * Go to database collection and get all
     * @return {Promise<ConsoleUser[]>} returns OrganisationData list.
     */
    public static async retrieveConsoleUsers(): Promise<ConsoleUser[]> {
      const source = await db.collection(DocumentReference.business).get();
      return source.docs.map((e) => ConsoleUser.fromJson(e.data()));
    }


    /**
     * Go to database reservation collection and get all
     * available documents
     * @return {Promise<ReservationData[]>} returns OrganisationData list.
     */
    public static async retrieveReservations(): Promise<ReservationData[]> {
      const source = await db.collection(DocumentReference.reservation).get();
      return source.docs.map((e) => ReservationData.fromJson(e.data()));
    }

    /**
     * Go to database reservation's bookings and get all
     * available documents
     * @param {string} reference document id for Reservation doc
     * @return {Promise<BookingData[]>} returns OrganisationData list.
     */
    public static async retrieveReservationBookings(reference: string):
      Promise<BookingData[]> {
      const source = await db.collection(DocumentReference.
        reservation).doc(reference)
        .collection(DocumentReference.booking).get();
      return source.docs.map((e) => BookingData.fromJson(e.data()));
    }

  /**
    * Go to database payments collection and get all
    * available payment documents
    * @return {Promise<PaymentRequest.Model[]>} returns OrganisationData list.
    */
    public static async retrieveAllPayments(): Promise<PaymentRequest.Model[]> {
      const source = await db.collection(DocumentReference.payments).get();
      return source.docs.map((e) => PaymentRequest.Model.fromJson(e.data()));
    }


    /**
     * A power function used to check if firestore document exist
     * @param {string} docID reference id
     * @param {string} collectionPath string path of collection
     *  i.e users/{user}/notification
     * @return {Promise<boolean>} nothing
     */
    static async doesDocumentExist(docID: string,
      collectionPath: string)
      : Promise<boolean> {
      const query = await db.
        collection(collectionPath).doc(docID).get();
      return query.exists;
    }
  }

  /**
   * Database management setters, updates and deletes
   */
  export class management {
    /**
   * update stripe information for users
   * @param {UserModel} user user model
   * @return {Promise<void>} returns na
   */
    public static async updateStripeInformation(user:
      UserModel): Promise<void> {
      await this.createOrUpdateFirebaseDocument(user.
        id.replace(DocumentTypes.user, ""),
        DocumentReference.users, {
        "stripe": user.stripe,
      }, false,
      );
    }

    /**
     * Update payment document
     * @param {string} id the payment document id
     * @param {Record<string, unknown>} data map to update with
     * @return {Promise<void>} void.
     */
    static async updatePaymentDoc(id: string,
      data: Record<string, unknown>)
      : Promise<void> {
      await db.
        collection(DocumentReference.payments).doc(id)
        .update(data);
    }

    /**
     * Update booking document
     * @param {string} booking the booking model
     * @param {string} data what to update
     * @return {Promise<void>} void.
     */
    static async updateBooking(booking: BookingData,
      data: Record<string, unknown>)
      : Promise<void> {
      await db.
        collection(DocumentReference.reservation).
        doc(booking.reservationID).
        collection(DocumentReference.booking).doc(booking.id)
        .update(data);
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
    static async createOrUpdateFirebaseDocument(docID: string,
      collectionPath: string,
      data: Record<string, unknown>, setter: boolean = true)
      : Promise<void> {
      const query = db.collection(collectionPath).doc(docID);
      if (setter) {
        await query.set(data);
      } else {
        await query.update(data);
      }
      return;
    }

    /**
     * Attach notification object
     * @param {LocalNotification} tray client reference
     * @return {Promise<UserModel[]>} returns list.
     */
    public static async attachNotificationTray(tray: LocalNotification):
      Promise<void> {
      if (tray.notification.id.length < 1) {
        throw new CustomError("Notification id must be greater than 1");
      }
      // console.log(`To: ${tray.notification.to}`);
      let source;
      if (tray.notification.to.startsWith("org")) {
        source = db.collection(DocumentReference.business)
          .doc(tray.notification.to)
          .collection(DocumentReference.notifications);
      } else {
        source = db.collection(DocumentReference.users)
          .doc(tray.notification.to.split("_")[1])
          .collection(DocumentReference.notifications);
      }
      if (!source) return;
      await source.doc(tray.notification.id).set(tray.toMap());
    }

  }
}