import { plainToInstance, Expose } from "class-transformer";

export const reviewTypes = ["overall", "checkIn", "reserve",
  "cleanliness", "accuracy", "communication", "location",
  "worth", "review", "message"];

/**
 * Buka ReviewRequest class
*/
export class ReviewRequest {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() product = "";
  @Expose() reviewed = "";
  @Expose() purchase = "";
  @Expose() reviewer = "";
  @Expose() message = "";
  @Expose() status = "";
  @Expose() review = "";
  @Expose() itemID = "";
  @Expose() created = 0;
  @Expose() updated = 0;
  @Expose() submitted: undefined | number;
  @Expose() link = "";
  @Expose() id = "";
  @Expose() reviewList: Record<string, unknown>[] = [];

  private items: ReviewData[] = [];


  /**
   * Change record to ReviewRequest class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ReviewRequest} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : ReviewRequest {
    const result: ReviewRequest = plainToInstance(ReviewRequest, obj,
      { excludeExtraneousValues: true });

    return result;
  }


  /**
   * resolve maps for certain attributes
   * @return {void} text
   */
  public generateItems(): void {
    for (let i = 0; i < 9; i++) {
      const data = new ReviewData();
      data.type = reviewTypes[i];
      this.items.push(data);
    }
  }

  /**
   * Helper class function to find one specific object based on id
   *
   * @param {ReviewRequest[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {ReviewRequest | undefined} found object else undefined
   */
  public static findOne(list: ReviewRequest[], id: string)
    : ReviewRequest | undefined {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return;
  }

  /**
   * resolve items maps to review list
   * @return {void} nothing
   */
  public resolveReviewList(): void {
    for (let i = 0; i < this.items.length; i++) {
      this.reviewList.push(this.items[i].toMap());
    }
  }

  /**
   * resolve review list maps to review list
   * @return {void} nothing
   */
  public resolveItems(): void {
    for (let i = 0; i < this.reviewList.length; i++) {
      const data = ReviewData.fromJson(this.reviewList[i]);
      this.items.push(data);
    }
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
    const res = JSON.parse(this.toJsonString());
    delete res["items"];
    return res;
  }
}

/**
 * Review Data class
*/
export class ReviewData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() type = "";
  @Expose() description = "";
  @Expose() rating = 0;
  @Expose() media: string[] = [];

  /**
   * Change record to ReviewData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {ReviewData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : ReviewData {
    const result: ReviewData = plainToInstance(ReviewData, obj,
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
