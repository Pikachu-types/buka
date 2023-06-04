import { plainToInstance, Expose } from "class-transformer";

/**
 * Buka SMSCampaignModel class
*/
export class SMSCampaignModel {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = "";
  @Expose() audience = "";
  @Expose() checkedOut = "";
  @Expose() message = "";
  @Expose() from = "";
  @Expose() amountPaid = 0;
  @Expose() dateSent = 0;
  @Expose() created = 0;
  @Expose() status = "";
  @Expose() client = "";
  @Expose() createdBy = "";
  @Expose() numbers: string[] = [];
  // numbers delivered to
  @Expose() successful: string[] = [];
  // / number of successful sends
  @Expose() sent = 0;
  @Expose() paid = false;

  /**
   * Change record to SMSCampaignModel class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {SMSCampaignModel} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : SMSCampaignModel {
    const result: SMSCampaignModel = plainToInstance(SMSCampaignModel, obj,
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
   * @param {SMSCampaignModel[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {SMSCampaignModel | undefined} found object else undefined
   */
  public static findOne(list: SMSCampaignModel[], id: string)
    : SMSCampaignModel | undefined {
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
