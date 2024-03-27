/**
 * Buka OnboardingData class
*/
export declare class OnboardingData {
    accepted: boolean;
    position: string;
    submitted: number | undefined;
    /**
     * Change record to OnboardingData class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {OnboardingData} this class
     */
    static fromJson(obj: Record<string, unknown>): OnboardingData;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
