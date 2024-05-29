import { CustomError, LocalNotification } from "labs-sharable";
import * as admin from "firebase-admin";
import {
  BookingData, Business, ConsoleUser,
  DocumentReference, DocumentTypes,
  ReservationData, UserModel, PaymentRequest, Reservation, parseInterface,
  InvitationRequest,
  CustomerContact,
  ServiceCategory,
  SingleService
} from "..";
import { Booking } from "../modules/models/booking/model";
import { BookingNote } from "../modules/models/booking/shared";

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

export namespace DatabaseFunctions {

  /**
   * Database helper class
   */
  export class getters {

    readonly db: admin.firestore.Firestore;

    constructor(admin: admin.firestore.Firestore) {
      this.db = admin;
    }

    /**
   * Go to database user collection and get all
   * available users
   * @return {Promise<UserModel[]>} returns list.
   */
    public async retrieveUsers(): Promise<UserModel[]> {
      const source = await this.db.collection(DocumentReference.users).get();
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
    public async retrieveBusinesses(): Promise<Business[]> {
      const source = await this.db.collection(DocumentReference.business).get();
      return source.docs.map((e) => Business.fromJson(e.data()));
    }

    /**
     * Go to database collection and get all
     * @return {Promise<ConsoleUser[]>} returns OrganisationData list.
     */
    public async retrieveConsoleUsers(): Promise<ConsoleUser[]> {
      const source = await this.db.collection(DocumentReference.business).get();
      return source.docs.map((e) => ConsoleUser.fromJson(e.data()));
    }


    /**
     * Go to database reservation collection and get all
     * available documents
     * @return {Promise<Reservation[]>} returns OrganisationData list.
     */
    public async retrieveReservations(): Promise<Reservation[]> {
      const source = await this.db.collection(DocumentReference.reservation).get();
      return source.docs.map((e) => e.data()['activity'] !== undefined ?
        Booking.fromJson(e.data()) : ReservationData.fromJson(e.data()));
    }

    /**
     * Go to database catalogue collection and get any related
     * @param {string} orgID client identifier
     * @return {Promise<ServiceCategory[]>} returns data.
     */
    public async retrieveServices(orgID: string): Promise<ServiceCategory[]> {
      const source = await this.db.collection(DocumentReference.catalogue)
        .where("owner", "==", orgID).get();
      const items: ServiceCategory[] = [];
      for (let i = 0; i < source.docs.length; i++){
        const e = source.docs[i];
        if (e.data()) {
          const item = ServiceCategory.fromJson(e.data());
          item.services = await this.getCategoryServices(item.id);
          items.push(item);
        }
      }
      return items;
    }

    /**
     * Grab category services
     * @param {string} cat category identifier
     * @return {Promise<SingleService[]>} returns OrganisationData list.
     */
    public async getCategoryServices(cat: string): Promise<SingleService[]> {
      const source = await this.db.collection(DocumentReference.catalogue).doc(cat).collection('services').get();
      return source.docs.map((e) => SingleService.fromJson(e.data()));
    }

    /**
     * Go to database invitation collection and get all
     * available documents
     * @return {Promise<InvitationRequest[]>} returns OrganisationData list.
     */
    public async retrieveInvitations(): Promise<InvitationRequest[]> {
      const source = await this.db.collection(DocumentReference.invitation).get();
      return source.docs.map((e) => InvitationRequest.fromJson(e.data()));
    }

    /**
     * Go to database reservation's bookings and get all
     * available documents
     * @param {string} reference document id for Reservation doc
     * @return {Promise<BookingData[]>} returns OrganisationData list.
     */
    public async retrieveReservationBookings(reference: string):
      Promise<BookingData[]> {
      const source = await this.db.collection(DocumentReference.
        reservation).doc(reference)
        .collection(DocumentReference.booking).get();
      return source.docs.map((e) => BookingData.fromJson(e.data()));
    }

    /**
     * Go to database business contacts and get all
     * available documents
     * @param {string} reference document id for Reservation doc
     * @return {Promise<CustomerContact[]>} returns OrganisationData list.
     */
    public async retrieveBusinessContacts(reference: string):
      Promise<CustomerContact[]> {
      const source = await this.db.collection(DocumentReference.
        business).doc(reference)
        .collection(DocumentReference.contacts).get();
      return source.docs.map((e) => CustomerContact.fromJson(e.data()));
    }

    /**
     * Go to database reservation's bookings and get all
     * available documents
     * @param {string} reference document id for Reservation doc
     * @return {Promise<BookingNote[]>} returns OrganisationData list.
     */
    public async retrieveBookingNotes(reference: string):
      Promise<BookingNote[]> {
      const source = await this.db.collection(DocumentReference.
        reservation).doc(reference)
        .collection(DocumentReference.notes).get();
      return source.docs.map((e) => (parseInterface((e.data() as Record<string, unknown>)) as BookingNote));
    }

  /**
    * Go to database payments collection and get all
    * available payment documents
    * @return {Promise<PaymentRequest.Model[]>} returns OrganisationData list.
    */
    public async retrieveAllPayments(): Promise<PaymentRequest.Model[]> {
      const source = await this.db.collection(DocumentReference.payments).get();
      return source.docs.map((e) => PaymentRequest.Model.fromJson(e.data()));
    }


    /**
     * A power function used to check if firestore document exist
     * @param {string} docID reference id
     * @param {string} collectionPath string path of collection
     *  i.e users/{user}/notification
     * @return {Promise<boolean>} nothing
     */
    async doesDocumentExist(docID: string,
      collectionPath: string)
      : Promise<boolean> {
      const query = await this.db.
        collection(collectionPath).doc(docID).get();
      return query.exists;
    }

    /**
     * A power function used to check if firestore sub document exist
     * @param {string} docID reference id
     * @param {string} subID reference sub id
     * @param {string} collectionPathA string path of collection
     * @param {string} collectionPathB string path of sub collection
     * @return {Promise<boolean>} nothing
     */
    async doesSubDocumentExist(docID: string, subID: string,
      collectionPathA: string, collectionPathB: string, )
      : Promise<boolean> {
      const query = await this.db.
        collection(collectionPathA).doc(docID)
        .collection(collectionPathB).doc(subID).get();
      return query.exists;
    }
  }

  /**
   * Database management setters, updates and deletes
   */
  export class management {

    readonly db: admin.firestore.Firestore;

    constructor(admin: admin.firestore.Firestore) {
      this.db = admin;
    }

    /**
   * update stripe information for users
   * @param {UserModel} user user model
   * @return {Promise<void>} returns na
   */
    public async updateStripeInformation(user:
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
    async updatePaymentDoc(id: string,
      data: Record<string, unknown>)
      : Promise<void> {
      await this.db.
        collection(DocumentReference.payments).doc(id)
        .update(data);
    }
    
    /**
     * Create business customer
     * @param {string} id the business document id
     * @param {Record<string, unknown>} data map to update with
     * @return {Promise<void>} void.
     */
    async createBusinessCustomer(id: string,
      data: CustomerContact)
      : Promise<void> {
      await this.db.
        collection(DocumentReference.business).doc(id)
        .collection(DocumentReference.contacts).doc(data.id)
        .update(data.toMap());
    }

    /**
     * Update booking document
     * @param {Booking} booking the booking model
     * @param {Record<string, unknown>} data what to update
     * @return {Promise<void>} void.
     */
    async updateBooking(booking: Booking,
      data: Record<string, unknown>)
      : Promise<void> {
      await this.db.
        collection(DocumentReference.reservation).
        doc(booking.id)
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
     async createOrUpdateFirebaseDocument(docID: string,
      collectionPath: string,
      data: Record<string, unknown>, setter = true)
      : Promise<void> {
      const query = this.db.collection(collectionPath).doc(docID);
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
    public async attachNotificationTray(tray: LocalNotification):
      Promise<void> {
      if (tray.notification.id.length < 1) {
        throw new CustomError("Notification id must be greater than 1");
      }
      // console.log(`To: ${tray.notification.to}`);
      let source;
      if (tray.notification.to.startsWith("org")) {
        source = this.db.collection(DocumentReference.business)
          .doc(tray.notification.to)
          .collection(DocumentReference.notifications);
      } else if (tray.notification.to.startsWith("user")) {
        source = this.db.collection(DocumentReference.users)
          .doc(tray.notification.to.split("_")[1])
          .collection(DocumentReference.notifications);
      } else {
        source = undefined;
      }
      if (!source) return;
      await source.doc(tray.notification.id).set(tray.toMap());
    }

  }
}