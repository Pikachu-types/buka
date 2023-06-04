/**
 * Default database document references
 */
export enum DocumentReference {
  /**
   * Collection reference for buka business
   */
  clients = "clients",
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

  /**
   * On message collection listener path 
   */
  onmessage = "conversations/{conversation}/messages/{message}"
}

/**
 * Buka spaces' account privileges
 */
export enum AccountPrivileges{
  owner = "owner",
  member = "member",
  admin = "admin",
  viewer = "viewer",
  undefined = "undefined"
}
/**
 * Buka custom domains
 */
export enum BukaCustomDomain{
  checkout = "checkout.buka.direct",
}

/**
 * Simple enum
 */
export enum NotificationType {
  Reservation = "reservation",
  Payment = "payment",
  Refund = "refund",
  Review = "review",
  ConnectionRequest = "connection",
  Message = "message",
  Cancellation = "cancellation",
  Registration = "registration",
  InviteBonus = "invite",
}

/**
 * Geography enum keys
 */
export enum GeographyType {
  Name = "name",
  ISO2 = "iso3",
  ISO3 = "ios2",
}

/**
 * Channels enum keys
 */
export enum NotificationChannels {
  Critical = "critical_channel",
  Basic = "basic_channel",
  Scheduled = "scheduled_channel",
  Chat = "chat_channel",
}

/**
 * Payment types enum
 */
export enum PaymentOption {
  now = "now",
  reserve = "reserve",
  onsite = "onsite"
}

/**
 * Modes enum
 */
export enum AppMode {
  live = "live",
  test = "test"
}

/**
 * Stripe payment enums
 */
export enum PaymentTypes {
  card = "card",
  klarna = "klarna",
  link = "link",
  wechat = "wechat_pay",
  aliPay = "alipay",
  sepa = "sepa_debit",
  giropay = "giropay",
  swish = "swish",
  tink = "tink",
}

/**
 * Channels enum group keys
 */
export enum NotificationChannelGroups {
  Critical = "critical_channel_group",
  Basic = "basic_channel_group",
  General = "general_channel_group",
  Scheduled = "scheduled_channel_group",
  Chat = "chat_channel_group",
}

/**
 * Usual payment status
*/
export enum Status {
  Deleted = "deleted",
  Draft = "draft",
  Open = "open",
  Paid = "paid",
  Uncollectible = "uncollectible",
  Void = "void",
  Accepted = "accepted",
  Pending = "pending",
  Refunded = "refunded",
  Confirmed = "confirmed",
  Unconfirmed = "unconfirmed",
  Cancelled = "cancelled",
  Completed = "completed",
  Rescheduled = "rescheduled",
}