import { plainToInstance, Expose } from "class-transformer";
import {
  BookedItem, BookingStats,
  IBookingActivity, IBookingPayment,
  IBookingTime,
  IDiscount, IPerson, IProfessional
} from "./shared";
import { Reservation } from "../../interfaces/account";

/**
 * akub bookings model
*/
export class Booking {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = ""; // uses the format booking_{id}
  @Expose() client = "";
  @Expose() bookedBy = "";
  @Expose() currency = "";
  @Expose() status: BookingStats = "unknown";
  @Expose() iat = 0;
  @Expose() fee = 0;
  @Expose() lut: number | undefined;
  @Expose() time: IBookingTime | undefined;
  @Expose() repetition: boolean | undefined;
  @Expose() activity: IBookingActivity[] = [];
  @Expose() discount: IDiscount | undefined;
  @Expose() payments: IBookingPayment[] = [];
  @Expose() people: IPerson[] = [];
  @Expose() items: BookedItem[] = [];
  @Expose() professional: IProfessional | undefined;



  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {Booking} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : Booking {
    const result: Booking = plainToInstance(Booking, obj,
      { excludeExtraneousValues: true });
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
   * Check if of this class type
   * @param {Object} error the object
   * @returns {boolean} returns true or false
   */
  public static isOfInstance(error: Object): boolean {
    return error instanceof Booking;
  }


  /**
   * Helper class function to find one specific id
   *
   * @param {Booking[]} list an array of bankids to
   *  sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {Booking | undefined} found object else undefined
   */
  public static findOne(list: Reservation[], id: string)
    : Booking | undefined {
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (!item) continue;
      if (item.id === id && this.isOfInstance(item)) return list[i] as Booking;
    }
    return;
  }


  /**
  * get document in map format
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap()
    : Record<string, unknown> {
    const res = JSON.parse(this.toJsonString());
    /// delete any unwanted prints i.e., delete res["onboardingData"];
    return res;
  }
}