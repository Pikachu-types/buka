import { plainToInstance, Expose } from "class-transformer";
import { DocumentTypes } from "../../enums/documents";
import { v1 as uuidv1 } from 'uuid';

/**
 * Saved contacts for organisations on console
*/
export class CustomerContact {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() id = "";
  @Expose() name = "";
  @Expose() address = "";
  @Expose() mobile = "";
  @Expose() email = "";
  @Expose() iat = 0;
  /**
   * Organisation id who registered this customer
   */
  @Expose() owner = "";
  @Expose() vat: string | undefined;
  @Expose() country = "";

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {CustomerContact} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : CustomerContact {
    const result: CustomerContact = plainToInstance(CustomerContact, obj,
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
   * @param {CustomerContact[]} list an array to sort from and find given
   * @param {string} id provide the needed id to match for
   * @return {CustomerContact | undefined} found object else undefined
   */
  public static findOne(list: CustomerContact[], id: string)
    : CustomerContact | undefined {
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

  /**
   * Create id
   * @return {string} text
   */
  public static generateID(): string {
    return `${DocumentTypes.contact}${uuidv1()}`;
  }
}
