import { plainToInstance, Expose } from "class-transformer";

/**
 * Buka SupportCard class
*/
export class SupportCardModel {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() closed?: number | undefined;
  @Expose() id = "";
  @Expose() title = "";
  @Expose() message = "";
  @Expose() created = 0;
  @Expose() lut = 0;
  @Expose() images: string[] = [];

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {SupportCardModel} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : SupportCardModel {
    const result: SupportCardModel = plainToInstance(SupportCardModel, obj,
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
   * Helper class function to find one specific object based on id
   *
   * @param {SupportCardModel[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {SupportCardModel | undefined} found object else undefined
   */
  public static findOne(list: SupportCardModel[], id: string)
    : SupportCardModel | undefined {
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
    return JSON.parse(this.toJsonString());
  }
}
