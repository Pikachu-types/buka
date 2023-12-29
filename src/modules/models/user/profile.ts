import {plainToInstance, Expose} from "class-transformer";

/**
 * User ProfileData class
*/
export class ProfileData {
    /* eslint new-cap: ["error", { "capIsNew": false }]*/
    @Expose() first = "";
    @Expose() last = "";
  
    /**
     * Change record to ProfileData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {ProfileData} this class
     */
    public static fromJson(obj: Record<string, unknown>)
      : ProfileData {
      const result: ProfileData = plainToInstance(ProfileData, obj,
          {excludeExtraneousValues: true});
  
      return result;
    }

    /**
     * getter
     * @return {string}full name of user
     */
    fullname(): string {
      return this.first + " " + this.last;
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
 * User ReferralModel class
*/
export class ReferralModel {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() code = "";
  @Expose() link = "";
  @Expose() longLink = "";

  /**
   * Change record to ReferralModel class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ReferralModel} this class
   */
  public static fromJson(obj?: Record<string, unknown>)
    : ReferralModel {
      if(obj == undefined) return new ReferralModel();
    const result: ReferralModel = plainToInstance(ReferralModel, obj,
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
