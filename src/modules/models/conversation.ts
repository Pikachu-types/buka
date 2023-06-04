import {plainToInstance, Expose} from "class-transformer";

/**
 * MessageModel class
*/
export class MessageModelModel {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = "";
  @Expose() conversationID = "";
  @Expose() type = "";
  @Expose() recipient = "";
  @Expose() sender = "";
  @Expose() content = "";
  @Expose() created = 0;
  @Expose() lut = 0; // last updated time
  @Expose() read = false;
  @Expose() media: string[] = [];

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {MessageModelModel} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : MessageModelModel {
    const result: MessageModelModel = plainToInstance(MessageModelModel, obj,
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
   * Helper class function to find one specific object based on id
   *
   * @param {MessageModelModel[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {MessageModelModel | undefined} found object else undefined
   */
  public static findOne(list: MessageModelModel[], id: string)
    : MessageModelModel | undefined {
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
