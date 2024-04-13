import { plainToInstance, Expose } from "class-transformer";
import { equalToIgnoreCase } from "labs-sharable";

/**
 * Console invitation request
*/
export class InvitationRequest {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() token = "";
  @Expose() name = "";
  @Expose() creator = "";
  @Expose() org = "";
  @Expose() iat = 0;
  @Expose() exp = 0;
  @Expose() invited = "";
  @Expose() role = "";
  @Expose() used = false;

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {InvitationRequest} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : InvitationRequest {
    const result: InvitationRequest = plainToInstance(InvitationRequest, obj,
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
   * @param {InvitationRequest[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {InvitationRequest | undefined} found object else undefined
   */
  public static findOne(list: InvitationRequest[], id: string)
    : InvitationRequest | undefined {
    for (let i = 0; i < list.length; i++) {
      if (list[i].token === id ||
        equalToIgnoreCase(list[i].invited, id)) return list[i];
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
