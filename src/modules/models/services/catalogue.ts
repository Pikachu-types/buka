import { plainToInstance, Expose } from "class-transformer";
import { SingleService } from "./service";

/**
 * akub service categories model
*/
export class ServiceCategory {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = ""; // uses the format cat_{id}
  /**
   * client ID
   */
  @Expose() owner = "";
  @Expose() name = "";
  @Expose() description = "";
  @Expose() iat = 0;
  @Expose() color = 0;
  @Expose() lut: number | undefined;

  services: SingleService[] = [];

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ServiceCategory} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : ServiceCategory {
    const result: ServiceCategory = plainToInstance(ServiceCategory, obj,
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
    return error instanceof ServiceCategory;
  }


  /**
   * Helper class function to find one specific id
   *
   * @param {ServiceCategory[]} list an array of bankids to
   *  sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {ServiceCategory | undefined} found object else undefined
   */
  public static findOne(list: ServiceCategory[], id: string)
    : ServiceCategory | undefined {
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

  // /**
  // * get document in json response format
  // * @return { Record<string, unknown>} returns doc map .
  // */
  // public toJSON()
  //   : Record<string, unknown> {
  //   const res = JSON.parse(this.toJsonString());
  //   res["services"] = JSON.parse(JSON.stringify(this.services));
  //   return res;
  // }
}