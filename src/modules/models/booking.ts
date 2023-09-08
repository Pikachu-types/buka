import {plainToInstance, Expose} from "class-transformer";
import { StripeDataHandler, equalToIgnoreCase } from "labs-sharable";
/**
 * Buka ReservationData class
*/
export class ReservationData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() administrativeCut = 0;
  @Expose() amountCharged = 0;
  @Expose() amountPaid = 0;
  @Expose() expectedGems = 0;
  @Expose() earned = 0;
  @Expose() created = 0;
  @Expose() lut = 0;
  @Expose() productID = "";
  @Expose() conversationID: string | undefined;
  @Expose() uid = "";
  @Expose() updatedBy = "";
  @Expose() currency = "";
  @Expose() id = "";
  @Expose() text = "";
  @Expose() client = "";
  @Expose() payCase = "";
  @Expose() status = "";
  @Expose() method = "";
  @Expose() stripeAccount = "";
  @Expose() checkoutID = "";
  @Expose() usedLoyalty = false;
  @Expose() pending = false;
  @Expose() bookings: string[] = [];
  @Expose() users: string[] | undefined;
  @Expose() source = "";
  @Expose() time:Record<string, unknown> = {};

  private timeModel: TimeData | undefined;
  listOfBookings: BookingData[] = [];

  /**
   * getter
   * @return {TimeData | undefined} time data
   */
  timeData(): TimeData | undefined {
    return this.timeModel;
  }
  
  /**
   * getter
   * @return {string} time data
   */
  paymentCase(): string {
    if (equalToIgnoreCase(this.payCase, "quarter")) {
      return "Pay in parts";
    } else if (equalToIgnoreCase(this.payCase, "full")) {
      return "Pay in full";
    } else {
      return "Currently unknown";
    }
  }

  /**
   * set time data
   * @param {TimeData} value time data for this reservation
   */
  public setTimeData(value: TimeData): void {
    this.timeModel = value;
  }

      
  /**
   * resolves certain maps from original json
   * @return {void} text
   */
  public resolveMaps(): void {
    this.timeModel = TimeData.fromJson(this.time);
    // if (this.stripe.invoice !== undefined)
    //   this.stripeData = StripeDataHandler.fromJson(this.stripe);
    if (this.expectedGems === undefined ||
      this.expectedGems === null) this.expectedGems = 0
    if (this.earned === undefined ||
      this.earned === null) this.earned = 0
  }

  /**
   * Change record to Reservation class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ReservationData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : ReservationData {
    const result: ReservationData = plainToInstance(ReservationData, obj,
        {excludeExtraneousValues: true});

    result.resolveMaps();

    return result;
  }

  /**
   * Helper class function to find one specific object based on id
   *
   * @param {ReservationData[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {ReservationData | undefined} found object else undefined
   */
  public static findOne(list: ReservationData[], id: string)
    : ReservationData | undefined {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return;
  }

  /**
   * This class handler to json
   * @return {string} text
   */
  public toJsonString(): string {
    return JSON.stringify(this);
  }

  /**
  * get document in map format
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap()
    : Record<string, unknown> {
    const res = JSON.parse(this.toJsonString());
    delete res["timeModel"];
    return res;
  }
}


/**
 * Buka TimeData class
*/
export class TimeData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() date = 0;
  @Expose() start = 0;
  @Expose() end = 0;
  @Expose() duration = 0;
  @Expose() time = "";

  /**
   * Change Firebase record to TimeData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {TimeData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : TimeData {
    const result: TimeData = plainToInstance(TimeData, obj,
        {excludeExtraneousValues: true});

    return result;
  }

  /**
   * This class handler to json
   * @return {string} text
   */
  public toJsonString(): string {
    return JSON.stringify(this);
  }
  
  /**
   * Compare this time data to another
   * check if they are similar or not
   * @param {TimeData} other time data of other booking
   * @return {boolean} result
   */
  public compareTimeDataStart(other:TimeData): boolean {
    return (this.start === other.start);
  }

  /**
   * Compare this time data to another
   * check if they are similar or not
   * @param {TimeData} other time data of other booking
   * @return {boolean} result
   */
  public compareTimeDataEnd(other:TimeData): boolean {
    return (this.end === other.end);
  }
  
  /**
   * Tell if there has been a date
   * change between this and other
   * @param {TimeData} other time data of other booking
   * @return {boolean} result
   */
  public isThereADateChange(other:TimeData): boolean {
    return this.compareTimeDataStart(other) ||
      (this.compareTimeDataEnd(other));
  }

  /**
  * get document in map format
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap()
    : Record<string, unknown> {
    return JSON.parse(this.toJsonString());
  }
}

/**
 * Buka BukaCheckoutData class
*/
export class BukaCheckoutData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() discount = 0;
  @Expose() expectedGems = 0;
  @Expose() fee = 0;
  @Expose() paid = 0;
  @Expose() previousPayment = 0;
  @Expose() price = 0;
  @Expose() promoCode = "";
  @Expose() reference: undefined | string;

  /**
   * Change Firebase record to BukaCheckoutData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {BukaCheckoutData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : BukaCheckoutData {
    const result: BukaCheckoutData = plainToInstance(BukaCheckoutData, obj,
        {excludeExtraneousValues: true});

    return result;
  }

  /**
   * This class handler to json
   * @return {string} text
   */
  public toJsonString(): string {
    return JSON.stringify(this);
  }

  /**
  * get document in map format
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap()
    : Record<string, unknown> {
    return JSON.parse(this.toJsonString());
  }
}

/**
 * Buka BookingData class
*/
export class BookingData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() productID = "";
  @Expose() user = "";
  @Expose() client = "";
  @Expose() id = "";
  @Expose() currency = "";
  @Expose() status = "";
  @Expose() promoCode = "";
  @Expose() reservationID = "";
  @Expose() itemID = "";
  @Expose() link = "";
  @Expose() price = 0;
  @Expose() lut = 0;
  @Expose() created = 0;
  @Expose() fee = 0;
  // if payment had been triggered previously and waiting confirmation
  @Expose() pending = false;
  @Expose() cleared = false;
  @Expose() reviewed = false;
  @Expose() time: Record<string, unknown> = {};
  @Expose() stripe: Record<string, unknown> | undefined;
  @Expose() checkout: Record<string, unknown> | undefined;
  @Expose() earned: number | undefined;
  @Expose() expectedGems: number | undefined;
  @Expose() actualPrice: number | undefined;
  @Expose() discount: number | undefined;
  @Expose() users: string[] | undefined;
  @Expose() source = "";
  @Expose() refund?: Record<string, unknown>;

  timeData?: TimeData;
  checkoutData?: BukaCheckoutData;
  stripeData?: StripeDataHandler

  /**
   * Change record to BookingData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {BookingData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : BookingData {
    const result: BookingData = plainToInstance(BookingData, obj,
      { excludeExtraneousValues: true });

    result.resolveMaps();

    return result;
  }

  /**
   * This class handler to json
   * @return {string} text
   */
  public toJsonString(): string {
    return JSON.stringify(this);
  }

  /**
   * Helper class function to find one specific object based on id
   *
   * @param {BookingData[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {BookingData | undefined} found object else undefined
   */
  public static findOne(list: BookingData[], id: string)
    : BookingData | undefined {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return;
  }

  /**
   * resolves certain maps from original json
   * @return {void} text
   */
  public resolveMaps(): void {
    this.timeData = TimeData.fromJson(this.time);
    if (this.stripe !== undefined)
      this.stripeData = StripeDataHandler.fromJson(this.stripe);
    if (this.checkout !== undefined) this.checkoutData =
      BukaCheckoutData.fromJson(this.checkout);
  }

  /**
  * get document in map format
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap()
    : Record<string, unknown> {
    const res = JSON.parse(this.toJsonString());
    delete res["timeData"];
    delete res["stripeData"];
    delete res["checkoutData"];
    return res;
  }
}
