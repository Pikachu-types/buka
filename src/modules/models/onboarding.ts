import { plainToInstance, Expose } from "class-transformer";

/**
 * Buka OnboardingData class
*/
export class OnboardingData {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() accepted = false;
  @Expose() position = "";
  @Expose() submitted: number | undefined;

  /**
   * Change record to OnboardingData class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {OnboardingData} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : OnboardingData {
    const result: OnboardingData = plainToInstance(OnboardingData, obj,
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
