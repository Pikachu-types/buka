"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.NotificationChannelGroups = exports.PaymentTypes = exports.AppMode = exports.PaymentOption = exports.NotificationChannels = exports.GeographyType = exports.NotificationType = exports.BukaCustomDomain = exports.AccountPrivileges = exports.DocumentReference = void 0;
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
    /**
     * On message collection listener path
     */
    DocumentReference["onmessage"] = "conversations/{conversation}/messages/{message}";
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
var PaymentOption;
(function (PaymentOption) {
    PaymentOption["now"] = "now";
    PaymentOption["reserve"] = "reserve";
    PaymentOption["onsite"] = "onsite";
})(PaymentOption = exports.PaymentOption || (exports.PaymentOption = {}));
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
//# sourceMappingURL=documents.js.map