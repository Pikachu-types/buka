import { Account, Business, UserModel } from "..";
/**
 * Power class to interact
 * with DB for accounts only
 */
export declare class AkubAccounts {
    /**
     * Get an account
     * @param {string} id of account to be found
     * @return {Promise<Account>} value
     */
    static retrieve(id: string): Promise<Account>;
    /**
     * Get user data
     * @param {string} id user id
     * @return {Promise<OrganisationData> } value
     */
    static user(id: string): Promise<UserModel>;
    /**
     * Get Org data
     * @param {string} id client id
     * @return {Promise<Business> } value
     */
    static client(id: string): Promise<Business>;
}
