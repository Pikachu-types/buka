import {plainToInstance, Expose} from "class-transformer";

/**
 * User UserPictureModel class
*/
export class UserPictureModel {
    /* eslint new-cap: ["error", { "capIsNew": false }]*/
    @Expose() thumbnail = "";
    @Expose() large = "";
    @Expose() main = "";
  
    /**
     * Change record to UserPictureModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {UserPictureModel} this class
     */
    public static fromJson(obj: Record<string, unknown>)
      : UserPictureModel {
      const result: UserPictureModel = plainToInstance(UserPictureModel, obj,
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
 * User EarningsHistoryModel class
*/
export class EarningsHistoryModel {
    /* eslint new-cap: ["error", { "capIsNew": false }]*/
    @Expose() title = "";
    @Expose() subtitle = "";
    @Expose() socialIcon?: string;
    @Expose() amount = 0;
    @Expose() timestamp = 0;
    @Expose() value = "";
  
    /**
     * Change record to EarningsHistoryModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {EarningsHistoryModel} this class
     */
    public static fromJson(obj: Record<string, unknown>)
      : EarningsHistoryModel {
      const result: EarningsHistoryModel = plainToInstance(EarningsHistoryModel, obj,
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
