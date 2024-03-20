/**
 * Default database document references
 */
export declare enum DocumentReference {
    /**
     * Collection reference for buka business
     */
    clients = "clients",
    /**
     * Collection reference for akub businesses
     */
    business = "businesses",
    /**
     * Collection reference for akub console users
     */
    consoleUsers = "console",
    contacts = "contacts",
    /**
     * Collection reference for users could also be a sub-collection
     */
    users = "users",
    /**
     * Notification reference collection
     */
    notifications = "notifications",
    /**
     * Onboarding collection is attributed to buka business
     */
    onboarding = "onboarding",
    /**
     * Buka reservations collection.
     * this hosts the booking collection
     */
    reservation = "reservations",
    /**
     * Buka promotions
     */
    promotions = "promotions",
    /**
     * Buka support collection
     */
    support = "support",
    /**
     * Buka pay collection reference
     */
    payments = "payments",
    /**
     * A support sub collections for user support cards
     */
    cards = "cards",
    /**
     * Usually a sub collection under reservations
     */
    booking = "bookings",
    /**
     * Reviews collections
     */
    reviews = "reviews",
    /**
     * Buka conversations reference
     */
    chats = "conversations",
    /**
     * Message sub collection under conversations
     */
    messages = "messages",
    products = "products",
    items = "items",
    /**
     * On message collection listener path
     */
    onmessage = "conversations/{conversation}/messages/{message}",
    /**
     * New booking created
     */
    onbooked = "reservations/{reservation}/bookings/{booking}"
}
/**
 * Document types
 */
export declare enum DocumentTypes {
    /**
     * Registered users
     */
    user = "user_",
    contact = "contact_",
    client = "client_",
    clientUser = "ba_",
    notifications = "noti_",
    payments = "payment_",
    reservations = "reservations_",
    bookings = "bookings_"
}
/**
 * Buka spaces' account privileges
 */
export declare enum AccountPrivileges {
    owner = "owner",
    member = "member",
    admin = "admin",
    viewer = "viewer",
    undefined = "undefined"
}
/**
 * Buka custom domains
 */
export declare enum BukaCustomDomain {
    checkout = "checkout.buka.direct"
}
/**
 * Simple enum
 */
export declare enum NotificationType {
    Reservation = "reservation",
    Payment = "payment",
    Refund = "refund",
    Review = "review",
    ConnectionRequest = "connection",
    Message = "message",
    Cancellation = "cancellation",
    Registration = "registration",
    InviteBonus = "invite"
}
/**
 * Geography enum keys
 */
export declare enum GeographyType {
    Name = "name",
    ISO2 = "iso3",
    ISO3 = "ios2"
}
/**
 * locale
 */
export declare enum Locales {
    en = "en",
    sv = "sv"
}
/**
 * Channels enum keys
 */
export declare enum NotificationChannels {
    Critical = "critical_channel",
    Basic = "basic_channel",
    Scheduled = "scheduled_channel",
    Chat = "chat_channel"
}
/**
 * Payment types enum
 */
export declare enum PaymentMethod {
    now = "now",
    reserve = "reserve",
    onsite = "onsite"
}
/**
 * Booking source
 */
export declare enum BookingSource {
    ios = "bukaIos",
    web = "bukaWeb",
    business = "bukaBusiness",
    android = "bukaAndroid"
}
/**
 * Modes enum
 */
export declare enum AppMode {
    live = "live",
    test = "test"
}
/**
 * Stripe payment enums
 */
export declare enum PaymentTypes {
    Card = "card",
    Klarna = "klarna",
    Link = "link",
    Wechat = "wechat_pay",
    AliPay = "alipay",
    Sepa = "sepa_debit",
    Giropay = "giropay",
    Swish = "swish",
    Tink = "tink",
    Stripe = "stripe"
}
/**
 * Channels enum group keys
 */
export declare enum NotificationChannelGroups {
    Critical = "critical_channel_group",
    Basic = "basic_channel_group",
    General = "general_channel_group",
    Scheduled = "scheduled_channel_group",
    Chat = "chat_channel_group"
}
/**
 * Usual payment status
*/
export declare enum Status {
    Deleted = "deleted",
    Draft = "draft",
    Open = "open",
    Paid = "paid",
    Uncollectible = "uncollectible",
    Void = "void",
    Accepted = "accepted",
    Pending = "pending",
    Refunded = "refunded",
    Unpaid = "unpaid",
    Confirmed = "confirmed",
    Unconfirmed = "unconfirmed",
    Cancelled = "cancelled",
    Completed = "completed",
    Rescheduled = "rescheduled"
}
/**
 * Buka Sendgrid api codes
 */
export declare enum SendgridTemplates {
    NotifyOfSupportCard = "d-aa217c61305a4672b6919d219553352d",
    SupportCreation = "d-dd4bbf3462924c2e87d0a1daacf00be6",
    ReviewRequest = "d-f611af1c61c7471c9da787a05517af5a",
    ReviewNotification = "d-8cfc434d4cc1484dbaf85902f0d30246",
    BookingReminder = "d-08fe0b1b99d74f858ac007e57d81a7e2",
    EmailBookingConfirmationToUser = "d-71c32fff30474d13b2766d8b235793e1",
    NotifyClientOfBooking = "d-d9aedafb7f2d40a5a9330cd337e90e24",
    WelcomeMail = "d-59db9fcf9e6b41fc898cf06ab0412531 ",
    ConsoleInvitation = "d-524a3bce1958494f9b78c0909b6c0f93",
    NewBusinessNotification = "d-ef5a392429154e61af28b4fef78a0f43",
    BusinessSubmission = "d-1f2548dba638495581e9500c723ed36b",
    BusinessApproved = "d-d9053183c42443ba805cb24bf690bf04",
    BookingConfirmed = "d-aac4a4db091b4a599509158a60fd02f0",
    UserBookingNotification = "d-2236a2bf067a4620b826c8ff0e5ac94e",
    BookingCreatedByBusiness = "d-99c9b203bc2d4e5780783b1b1d408ca5",
    BookingUpdated = "d-01dd3e6f928949de95b3ca76351eded4",
    SendInvoiceForPayment = "d-6289f9798e364a2eb0877ac4431abd18",
    SendReceiptPayment = "d-459cad44141e4f4183020bb543c06244",
    JustGotPaid = "d-9af5b37b8f304e9fbdc8a5593f14e835",
    Receipt = "d-9d5aabe3cd1f4259bd1b82370a3173f8"
}
