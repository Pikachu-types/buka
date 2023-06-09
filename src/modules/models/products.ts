import { plainToInstance, Expose } from "class-transformer";

/**
 * Buka ProductData class
*/
export class ProductData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = "";
  @Expose() category = "";
  @Expose() type = "";
  @Expose() name = "";
  @Expose() description = "";
  @Expose() creator = "";
  @Expose() image = "";
  @Expose() client = "";
  @Expose() published = false;
  @Expose() created = 0;
  @Expose() updated = 0;
  @Expose() items: string[] = [];

  /**
   * Change record to ProductData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ProductData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : ProductData {
    const result: ProductData = plainToInstance(ProductData, obj,
      { excludeExtraneousValues: true });

    return result;
  }


  /**
   * Helper class function to find one specific object based on id
   *
   * @param {ProductData[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {ProductData | undefined} found object else undefined
   */
  public static findOne(list: ProductData[], id: string)
    : ProductData | undefined {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return;
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
 * ProductItemData class
*/
export class ProductItemData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = "";
  @Expose() type = "";
  @Expose() thumbnail = "";
  @Expose() category = "";
  @Expose() currency = "";
  @Expose() productID = "";
  @Expose() personType = "";
  @Expose() owner = "";
  @Expose() durationModel = "";
  @Expose() pricingModel = "";
  @Expose() price = 0;
  @Expose() duration = 0;
  @Expose() estimated = false;
  @Expose() images: string[] = [];

  /**
   * Change record to ProductItemData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ProductItemData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : ProductItemData {
    const result: ProductItemData = plainToInstance(ProductItemData, obj,
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
   * @param {ProductItemData[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {ProductItemData | undefined} found object else undefined
   */
  public static findOne(list: ProductItemData[], id: string)
    : ProductItemData | undefined {
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