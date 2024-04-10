import { plainToInstance, Expose } from "class-transformer";
import { deviceComparator, equalToIgnoreCase } from "labs-sharable";
import { IFCM } from "../../interfaces/miscellenous";

/**
 * User FCMDataModel class
*/
export class FCMDataModel {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() token?: string;
  @Expose() device?: string;

  /**
   * Change record to FCMDataModel class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {FCMDataModel} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : FCMDataModel {
    const result: FCMDataModel = plainToInstance(FCMDataModel, obj,
      { excludeExtraneousValues: true });

    return result;
  }

  /**
   * getter
   * @return {boolean} validate if user device is ios
   */
  public isIOS(): boolean {
    if (this.device == undefined) return false;
    return equalToIgnoreCase(this.device, deviceComparator);
  }
  /**
   * getter
   * @return {boolean} validate if user device is ios
   */
  public static isIOS(arg?: IFCM): boolean {
    if (!arg) return false;
    if (arg.device == undefined) return false;
    return equalToIgnoreCase(arg.device, deviceComparator);
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