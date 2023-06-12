"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendgridTemplates = exports.Status = exports.NotificationChannelGroups = exports.PaymentTypes = exports.AppMode = exports.BookingSource = exports.PaymentMethod = exports.NotificationChannels = exports.GeographyType = exports.NotificationType = exports.BukaCustomDomain = exports.AccountPrivileges = exports.DocumentReference = void 0;
/**
 * Default database document references
 */
var DocumentReference;
(function (DocumentReference) {
    /**
     * Collection reference for buka business
     */
    DocumentReference["clients"] = "clients";
    /**
     * Collection reference for users could also be a sub-collection
     */
    DocumentReference["users"] = "users";
    /**
     * Notification reference collection
     */
    DocumentReference["notifications"] = "notifications";
    /**
     * Onboarding collection is attributed to buka business
     */
    DocumentReference["onboarding"] = "onboarding";
    /**
     * Buka reservations collection.
     * this hosts the booking collection
     */
    DocumentReference["reservation"] = "reservations";
    /**
     * Buka promotions
     */
    DocumentReference["promotions"] = "promotions";
    /**
     * Buka support collection
     */
    DocumentReference["support"] = "support";
    /**
     * Buka pay collection reference
     */
    DocumentReference["payments"] = "payments";
    /**
     * A support sub collections for user support cards
     */
    DocumentReference["cards"] = "cards";
    /**
     * Usually a sub collection under reservations
     */
    DocumentReference["booking"] = "bookings";
    /**
     * Reviews collections
     */
    DocumentReference["reviews"] = "reviews";
    /**
     * Buka conversations reference
     */
    DocumentReference["chats"] = "conversations";
    /**
     * Message sub collection under conversations
     */
    DocumentReference["messages"] = "messages";
    DocumentReference["products"] = "products";
    DocumentReference["items"] = "items";
    /**
     * On message collection listener path
     */
    DocumentReference["onmessage"] = "conversations/{conversation}/messages/{message}";
    /**
     * New booking created
     */
    DocumentReference["onbooked"] = "reservations/{reservation}/bookings/{booking}";
})(DocumentReference = exports.DocumentReference || (exports.DocumentReference = {}));
/**
 * Buka spaces' account privileges
 */
var AccountPrivileges;
(function (AccountPrivileges) {
    AccountPrivileges["owner"] = "owner";
    AccountPrivileges["member"] = "member";
    AccountPrivileges["admin"] = "admin";
    AccountPrivileges["viewer"] = "viewer";
    AccountPrivileges["undefined"] = "undefined";
})(AccountPrivileges = exports.AccountPrivileges || (exports.AccountPrivileges = {}));
/**
 * Buka custom domains
 */
var BukaCustomDomain;
(function (BukaCustomDomain) {
    BukaCustomDomain["checkout"] = "checkout.buka.direct";
})(BukaCustomDomain = exports.BukaCustomDomain || (exports.BukaCustomDomain = {}));
/**
 * Simple enum
 */
var NotificationType;
(function (NotificationType) {
    NotificationType["Reservation"] = "reservation";
    NotificationType["Payment"] = "payment";
    NotificationType["Refund"] = "refund";
    NotificationType["Review"] = "review";
    NotificationType["ConnectionRequest"] = "connection";
    NotificationType["Message"] = "message";
    NotificationType["Cancellation"] = "cancellation";
    NotificationType["Registration"] = "registration";
    NotificationType["InviteBonus"] = "invite";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
/**
 * Geography enum keys
 */
var GeographyType;
(function (GeographyType) {
    GeographyType["Name"] = "name";
    GeographyType["ISO2"] = "iso3";
    GeographyType["ISO3"] = "ios2";
})(GeographyType = exports.GeographyType || (exports.GeographyType = {}));
/**
 * Channels enum keys
 */
var NotificationChannels;
(function (NotificationChannels) {
    NotificationChannels["Critical"] = "critical_channel";
    NotificationChannels["Basic"] = "basic_channel";
    NotificationChannels["Scheduled"] = "scheduled_channel";
    NotificationChannels["Chat"] = "chat_channel";
})(NotificationChannels = exports.NotificationChannels || (exports.NotificationChannels = {}));
/**
 * Payment types enum
 */
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["now"] = "now";
    PaymentMethod["reserve"] = "reserve";
    PaymentMethod["onsite"] = "onsite";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
/**
 * Booking source
 */
var BookingSource;
(function (BookingSource) {
    BookingSource["ios"] = "bukaIos";
    BookingSource["web"] = "bukaWeb";
    BookingSource["business"] = "bukaBusiness";
    BookingSource["android"] = "bukaAndroid";
})(BookingSource = exports.BookingSource || (exports.BookingSource = {}));
/**
 * Modes enum
 */
var AppMode;
(function (AppMode) {
    AppMode["live"] = "live";
    AppMode["test"] = "test";
})(AppMode = exports.AppMode || (exports.AppMode = {}));
/**
 * Stripe payment enums
 */
var PaymentTypes;
(function (PaymentTypes) {
    PaymentTypes["card"] = "card";
    PaymentTypes["klarna"] = "klarna";
    PaymentTypes["link"] = "link";
    PaymentTypes["wechat"] = "wechat_pay";
    PaymentTypes["aliPay"] = "alipay";
    PaymentTypes["sepa"] = "sepa_debit";
    PaymentTypes["giropay"] = "giropay";
    PaymentTypes["swish"] = "swish";
    PaymentTypes["tink"] = "tink";
})(PaymentTypes = exports.PaymentTypes || (exports.PaymentTypes = {}));
/**
 * Channels enum group keys
 */
var NotificationChannelGroups;
(function (NotificationChannelGroups) {
    NotificationChannelGroups["Critical"] = "critical_channel_group";
    NotificationChannelGroups["Basic"] = "basic_channel_group";
    NotificationChannelGroups["General"] = "general_channel_group";
    NotificationChannelGroups["Scheduled"] = "scheduled_channel_group";
    NotificationChannelGroups["Chat"] = "chat_channel_group";
})(NotificationChannelGroups = exports.NotificationChannelGroups || (exports.NotificationChannelGroups = {}));
/**
 * Usual payment status
*/
var Status;
(function (Status) {
    Status["Deleted"] = "deleted";
    Status["Draft"] = "draft";
    Status["Open"] = "open";
    Status["Paid"] = "paid";
    Status["Uncollectible"] = "uncollectible";
    Status["Void"] = "void";
    Status["Accepted"] = "accepted";
    Status["Pending"] = "pending";
    Status["Refunded"] = "refunded";
    Status["Confirmed"] = "confirmed";
    Status["Unconfirmed"] = "unconfirmed";
    Status["Cancelled"] = "cancelled";
    Status["Completed"] = "completed";
    Status["Rescheduled"] = "rescheduled";
})(Status = exports.Status || (exports.Status = {}));
/**
 * Buka Sendgrid api codes
 */
var SendgridTemplates;
(function (SendgridTemplates) {
    SendgridTemplates["NotifyOfSupportCard"] = "d-aa217c61305a4672b6919d219553352d";
    SendgridTemplates["SupportCreation"] = "d-dd4bbf3462924c2e87d0a1daacf00be6";
    SendgridTemplates["ReviewRequest"] = "d-f611af1c61c7471c9da787a05517af5a";
    SendgridTemplates["ReviewNotification"] = "d-8cfc434d4cc1484dbaf85902f0d30246";
    SendgridTemplates["BookingReminder"] = "d-08fe0b1b99d74f858ac007e57d81a7e2";
    SendgridTemplates["EmailBookingConfirmationToUser"] = "d-71c32fff30474d13b2766d8b235793e1";
    SendgridTemplates["NotifyClientOfBooking"] = "d-d9aedafb7f2d40a5a9330cd337e90e24";
    SendgridTemplates["WelcomeMail"] = "d-59db9fcf9e6b41fc898cf06ab0412531 ";
    SendgridTemplates["ConsoleInvitation"] = "d-524a3bce1958494f9b78c0909b6c0f93";
    SendgridTemplates["NewBusinessNotification"] = "d-ef5a392429154e61af28b4fef78a0f43";
    SendgridTemplates["BusinessSubmission"] = "d-1f2548dba638495581e9500c723ed36b";
    SendgridTemplates["BusinessApproved"] = "d-d9053183c42443ba805cb24bf690bf04";
    SendgridTemplates["BookingConfirmed"] = "d-aac4a4db091b4a599509158a60fd02f0";
    SendgridTemplates["UserBookingNotification"] = "d-2236a2bf067a4620b826c8ff0e5ac94e";
    SendgridTemplates["BookingCreatedByBusiness"] = "d-99c9b203bc2d4e5780783b1b1d408ca5";
    SendgridTemplates["BookingUpdated"] = "d-01dd3e6f928949de95b3ca76351eded4";
})(SendgridTemplates = exports.SendgridTemplates || (exports.SendgridTemplates = {}));
//# sourceMappingURL=documents.js.map