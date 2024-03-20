import { plainToInstance, Expose } from "class-transformer";
import { IFCM } from "../../interfaces/miscellenous";

/**
 * akub console user model
*/
export class ConsoleUser {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = ""; // uses the format ba_{id}
  @Expose() iat = 0;
  @Expose() lut: number | undefined;
  @Expose() profile: IConsoleProfile | undefined;
  @Expose() contact: IConsoleContact | undefined;
  @Expose() login: IConsoleLogin | undefined;
  @Expose() fcm: IFCM | undefined;
  @Expose() country: string = "";

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ConsoleUser} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : ConsoleUser {
    const result: ConsoleUser = plainToInstance(ConsoleUser, obj,
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
    return error instanceof ConsoleUser;
  }

  /**
   * Helper class function to find one specific id
   *
   * @param {ConsoleUser[]} list an array of bankids to
   *  sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {ConsoleUser | undefined} found object else undefined
   */
  public static findOne(list: ConsoleUser[], id: string)
    : ConsoleUser | undefined {
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

export interface IConsoleContact {
  emailVerified: boolean;
  phone: string;
  phoneVerified: boolean;
  email: string;
}

export interface IConsoleLogin {
  passcode?: string;
  tfA: boolean;
  provider: string;
}

export interface IConsoleProfile {
  image?: string;
  last: string;
  first: string;
}