import { plainToInstance, Expose } from "class-transformer";
import { IReferral, TimeZone } from "../../interfaces/miscellenous";
import { ConsoleUser } from "./user";
import { AccountPrivileges } from "../..";
import { equalToIgnoreCase } from "labs-sharable";

/**
 * akub business client model
*/
export class Business {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = ""; // uses the format org_{id}
  @Expose() iat = 0;
  @Expose() lut: number | undefined;
  @Expose() calendar: ICalendar | undefined;
  @Expose() marketplace: IMarketplace  | undefined;
  @Expose() billing: IBusinessBilling  | undefined;
  @Expose() legal: IBusinessLegal  | undefined;
  @Expose() links: IBusinessLinks  | undefined;
  @Expose() providers: IPaymentConnectors  | undefined;
  @Expose() location: ILocation  | undefined;
  @Expose() info: IBusinessInfo  | undefined;
  @Expose() referral: IReferral  | undefined;
  @Expose() team: Record<string, { role: string }> = {};
  

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {Business} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : Business {
    const result: Business = plainToInstance(Business, obj,
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
    return error instanceof Business;
  }

  /**
   * Helper class function to find one specific id
   *
   * @param {Business[]} list an array of bankids to
   *  sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {Business | undefined} found object else undefined
   */
  public static findOne(list: Business[], id: string)
    : Business | undefined {
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

  /**
   * Check if user has read write privilege
   * @param {ConsoleUser} user  the user in question
   * @return {boolean} value
   */
  public isaPrivilegedUser(user: ConsoleUser): boolean {
    const parm = [AccountPrivileges.admin.toString(),
    AccountPrivileges.owner.toString()];
    if (!this.team) return false;
    if (!user.contact) return false;

    if (!this.team[`${user.contact.email}`]) return false;

    return parm.includes(this.team[`${user.contact.email}`].role);
  }

  /**
   * get all privileged users
   * @return {string[]} value
   */
  public allPrivilegedUsers(): string[] {
    const res: string[] = [];
    const parm = [AccountPrivileges.admin.toString(),
    AccountPrivileges.owner.toString()];
    for (let a in this.team) {
      const role = ((this.team as Record<string,
        unknown>)[a]) as Record<string, unknown>;
      if (parm.includes(role['role'] as string)) {
        res.push(a);
      }
    }
    return res;
  }

  /**
   * get owner
   * @return {string | undefined } value
   */
  public getOwner(): string | undefined {
    let res: string | undefined;
    for (let a in this.team) {
      const role = ((this.team as Record<string,
        unknown>)[a]) as Record<string, unknown>;
      if (equalToIgnoreCase(role['role'] as string,
        AccountPrivileges.owner.toString())) {
        res = (a);
        break;
      }
    }
    return res;
  }
  

  /**
   * Find space owner
   * @param {ConsoleUser} user the console user in question
   * @return {boolean} value
   */
  public findSpaceOwner(user: ConsoleUser): boolean {
    if (!this.team) return false;
    if (!user.contact) return false;

    if (!this.team[`${user.contact.email}`]) return false;

    return equalToIgnoreCase(this.team[`${user.contact.email}`].role,
      AccountPrivileges.owner.toString());
  }

}

export interface IBusinessLegal {
  rcNumber: string;
  name: string;
  vat: string;
}

export interface IBusinessLinks {
  website: string;
  facebook: string;
  instagram: string;
}

export interface IMarketplace {
  schedule: ISchedule;
  accountType: string;
  location: ILocation;
  availability: string;
  photos: string[];
  billing: MarketplaceBilling;
}

export interface ISchedule {
  thu?: IWeekDayDuration;
  tue?: IWeekDayDuration;
  max: number;
  wed?: IWeekDayDuration;
  sat?: IWeekDayDuration;
  fri?: IWeekDayDuration;
  sun?: IWeekDayDuration;
  mon?: IWeekDayDuration;
}

export interface IWeekDayDuration {
  begin: string;
  end: string;
}

/**
 * How the business get's paid
 */
export interface MarketplaceBilling {
  stripe: string;
}

export interface IBusinessInfo {
  country: string;
  teamSize: string;
  mobile: string;
  name: string;
  logo?: string;
  description: string;
  services: IBusinessServices;
  email: string;
  currency: string;
}

export interface IBusinessServices {
  list: string[];
  primary: string;
}

/**
 * Supported payment connectors
 */
export interface IPaymentConnectors {
  stripe?: IPayProviderData,
  tink?: IPayProviderData,
}

/**
 * Payment provider interface
*/
export interface IPayProviderData {
  id: string,
  testID?: string,
  created?: number,
  completed: boolean,
}

/**
 * business billing interface
*/
export interface IBusinessBilling {
  note: string;
  name: string;
  location: ILocation;
}

export interface ILocation {
  country: string;
  code: string;
  city: string;
  address2: string;
  formatted: string;
  latitude: null;
  postCode: string;
  place: string;
  longitude: null;
}

export interface ICalendar {
  weekStart: string;
  timeZone: TimeZone;
}