import { plainToInstance, Expose } from "class-transformer";
import { IPricing } from "../booking/shared";

/**
 * akub single service model
*/
export class SingleService {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = ""; // uses the format service_{id}
  @Expose() iat = 0;
  @Expose() marketplace = false;
  @Expose() index = 0;
  @Expose() lut: number | undefined;
  @Expose() basic: IBasic | undefined;
  @Expose() notification: INotifications | undefined;
  @Expose() saleSettings: ISaleSettings | undefined;
  @Expose() pricing: IPricing[] = [];

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {SingleService} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : SingleService {
    const result: SingleService = plainToInstance(SingleService, obj,
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
    return error instanceof SingleService;
  }


  /**
   * Helper class function to find one specific id
   *
   * @param {SingleService[]} list an array of bankids to
   *  sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {SingleService | undefined} found object else undefined
   */
  public static findOne(list: SingleService[], id: string)
    : SingleService | undefined {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
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

interface IBasic {
  serviceType: {
    ref: string;
    data: string;
  };
  name: string;
  description: string;
  aftercare: string;
  category: string;
}

interface INotifications {
  remind: boolean;
  info: {
    duration: string;
    time: number;
  };
}

export interface ISaleSettings {
  tax: string;
}