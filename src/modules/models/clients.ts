import { plainToInstance, Expose } from "class-transformer";
import { OnboardingData } from "./onboarding";
import { AccountPrivileges } from "../enums/documents";
import { equalToIgnoreCase } from "labs-sharable";
import { UserModel } from "./user";
import { IPaymentConnectors } from "./console/business";
import { IImages } from "../..";

/**
 * Buka OrganisationData class
*/
export class OrganisationData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() name = "";
  @Expose() logo = "";
  @Expose() currency = "";
  @Expose() domain = "";
  @Expose() locale = "";
  @Expose() id = "";
  @Expose() memberID = "";
  @Expose() regSource = "";
  @Expose() stripeID = "";
  @Expose() created = 0;
  @Expose() category: string | undefined;
  @Expose() rating: number | undefined;
  @Expose() images: IImages | undefined;
  @Expose() sms: Record<string, unknown> = {};
  @Expose() provider?: IPaymentConnectors;
  @Expose() contact: Record<string, unknown> = {};
  @Expose() referral: Record<string, unknown> = {};
  @Expose() schedule: Record<string, unknown> = {};
  @Expose() onboarding: Record<string, unknown> = {};
  @Expose() setupDone = false;
  @Expose() acceptedLegalTerms = false;
  @Expose() testAcct = false;
  @Expose() members: string[] = [];
  @Expose() payProviders: string[] | undefined;
  @Expose() whyUseBuka: string[] | undefined;
  @Expose() gallery: string[] | undefined;
  @Expose() methods: string[] | undefined;
  contactData: ContactData | undefined;
  scheduleData: ScheduleData | undefined;
  onboardingData: OnboardingData | undefined;
  smsData: SMSData | undefined;

  /**
   * Change record to Reservation class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {OrganisationData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : OrganisationData {
    const result: OrganisationData = plainToInstance(OrganisationData, obj,
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
   * Check if user has read write privilege
   * @param {UserModel} user  the user in question
   * @return {boolean} value
   */
  public static isaPrivilegedUser(user:UserModel): boolean {
    const parm = [AccountPrivileges.admin.toString(),
    AccountPrivileges.owner.toString()];
    return parm.includes(user.login?.role ?? "");
  }
  
  /**
   * Find space owners
   * @param {UserModel} user  the user in question
   * @return {boolean} value
   */
  public static findSpaceOwners(user: UserModel): boolean {
    return equalToIgnoreCase(AccountPrivileges.owner.toString(), user.login?.role ?? "");
  }

  /**
   * Check if of this class type
   * @param {Object} error the object
   * @returns {boolean} returns true or false
   */
  public static isOfInstance(error: Object): boolean {
    return error instanceof OrganisationData;
  }

  /**
   * resolve maps for certain attributes
   * @return {void} text
   */
  public resolveMaps(): void {
    this.contactData = ContactData.fromJson(this.contact);
    this.scheduleData = ScheduleData.fromJson(this.schedule);
    this.smsData = SMSData.fromJson(this.sms);
    this.onboardingData = OnboardingData.fromJson(this.onboarding);
  }

  /**
   * Helper class function to find one specific id
   *
   * @param {OrganisationData[]} list an array of bankids to
   *  sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {OrganisationData | undefined} found object else undefined
   */
  public static findOne(list: OrganisationData[], id: string)
    : OrganisationData | undefined {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id || list[i].memberID === id) return list[i];
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
    delete res["onboardingData"];
    delete res["contactData"];
    delete res["smsData"];
    delete res["scheduleData"];
    return res;
  }
}


/**
 * Buka ContactData class
*/
export class ContactData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() email = "";
  @Expose() legalName = "";
  @Expose() mobile = "";
  @Expose() orgNumber = "";
  @Expose() vat = "";
  @Expose() website = "";
  @Expose() address: Record<string, unknown> = {};

  addressData: AddressData | undefined;

  /**
   * Change record to ContactData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ContactData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : ContactData {
    const result: ContactData = plainToInstance(ContactData, obj,
      { excludeExtraneousValues: true });
    result.resolveMaps();
    return result;
  }

  /**
   * resolve maps for certain attributes
   * @return {void} text
   */
  public resolveMaps(): void {
    this.addressData = AddressData.fromJson(this.address);
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
 * BookingEmailNotify
*/
export interface SMSTrial {
  active: boolean,
  ends: number,
}

/**
 * Buka SMSData class
*/
export class SMSData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() active = false;
  @Expose() lut: undefined | number;
  @Expose() expires: undefined | number;
  @Expose() mobile = "";
  @Expose() trial: SMSTrial | undefined;

  /**
   * Change record to SMSData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {SMSData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : SMSData {
    const result: SMSData = plainToInstance(SMSData, obj,
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
  * get document in map format
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap()
    : Record<string, unknown> {
    return JSON.parse(this.toJsonString());
  }
}

/**
 * Buka AddressData class
*/
export class AddressData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() city = "";
  @Expose() postCode = "";
  @Expose() code = "";
  @Expose() country = "";
  @Expose() place = "";
  @Expose() formatted = "";
  @Expose() longitude: number | undefined;
  @Expose() latitude: number | undefined;
  /**
   * Change record to AddressData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {AddressData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : AddressData {
    const result: AddressData = plainToInstance(AddressData, obj,
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
   * This class handler to address
   * @return {string} text
   */
  public toString(): string {
    return this.place + " " + this.city + " " +
      this.postCode + ", " + this.country;
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
 * Buka ScheduleData class
*/
export class ScheduleData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() open = 0;
  @Expose() closed = 0;
  @Expose() max = 0;
  @Expose() days: number[] = [];

  /**
   * Change record to ScheduleData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ScheduleData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : ScheduleData {
    const result: ScheduleData = plainToInstance(ScheduleData, obj,
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
  * get document in map format
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap()
    : Record<string, unknown> {
    return JSON.parse(this.toJsonString());
  }
}