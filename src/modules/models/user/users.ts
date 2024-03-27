import {plainToInstance, Expose} from "class-transformer";
import { FCMDataModel } from "./fcm_model";
import { EarningsHistoryModel, UserPictureModel } from "./picture";
import { ProfileData, ReferralModel } from "./profile";
import { equalToIgnoreCase } from "labs-sharable";
import { IPayProviderData } from "../console/business";

/**
* General User class
*/
export class UserModel {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/

  email = "";
  gender = "";
  id = "";
  testAccount = false;
  credits?: number;
  subscribed?: boolean;
  login?: LoginData;
  profile?: ProfileData;
  referral?: ReferralModel;
  stripe?: IPayProviderData;
  fcm?: FCMDataModel;
  picture?: UserPictureModel;
  dob?: DOBModel;
  earnings: EarningsHistoryModel[] = [];

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {void} this class
   */
   public fromJson(obj: Record<string, unknown>)
: void {
    this.email = obj.email as string;
    this.gender = obj.gender as string;
    this.id = (obj.id ?? "") as string;
    this.testAccount = obj.testAccount as boolean;
    this.stripe = obj.stripe as IPayProviderData;
    this.credits = obj.credits as number | undefined;
    this.subscribed = obj.subscribed as boolean | undefined;

    this.profile = ProfileData.fromJson(obj.profile as Record<string, unknown>);
    this.dob = DOBModel.fromJson(obj.dob as Record<string, unknown>);
    this.login = LoginData.fromJson(obj.login as Record<string, unknown>);
    this.picture = UserPictureModel.fromJson(obj.picture as Record<string, unknown>);
    this.referral = ReferralModel.fromJson(obj.referral as Record<string, unknown> | undefined);
    this.fcm = FCMDataModel.fromJson(obj.fcm as Record<string, unknown>);

    if(obj.creditHistory != null || obj.creditHistory != undefined){
      const history = obj.creditHistory as Record<string, unknown>[];
      for(let i = 0; i < history.length; i++){
        this.earnings.push(EarningsHistoryModel.fromJson(history[i]));
      }
    }

   }
  
  /**
   * Helper class function to find one specific object based on id
   *
   * @param {UserModel[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {UserModel | undefined} found object else undefined
   */
  public static findOne(list: UserModel[], id: string)
    : UserModel | undefined {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id || list[i].login?.uid === id) return list[i];
    }
    return;
  }

  /**
   * Check if of this class type
   * @param {Object} error the object
   * @returns {boolean} returns true or false
   */
  public static isOfInstance(error: Object): boolean {
    return error instanceof UserModel;
  }
  
  /**
  * This class returns user pronoun
  * @return {string} text
  */
  public pronoun(): string {
    if (equalToIgnoreCase(this.gender, "male")) {
      return "his";
    }else if (equalToIgnoreCase(this.gender, "female")) {
      return "her";
    } else {
      return "their";
    }
  }

}

/**
 * User LoginData class
*/
export class LoginData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() provider = "";
  @Expose() uid = "";
  @Expose() verified?: boolean;
  @Expose() joined = 0;
  @Expose() referral = "";
  @Expose() role?: string;
  @Expose() company?: string;

  /**
   * Change record to LoginData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {LoginData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : LoginData {
    const result: LoginData = plainToInstance(LoginData, obj,
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
 * User DOBModel class
*/
export class DOBModel {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() date = "";
  @Expose() age = 0;
  @Expose() year = 0;
  @Expose() month?: string;

  /**
   * Change record to DOBModel class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {DOBModel} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : DOBModel {
    const result: DOBModel = plainToInstance(DOBModel, obj,
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

