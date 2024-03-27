import { Account, Business, UserModel } from "..";
import { DatabaseFunctions } from "./database";
/**
 * Power class to interact
 * with DB for accounts only
 */
export declare class AkubAccounts {
    readonly getter: DatabaseFunctions.getters;
    constructor(getter: DatabaseFunctions.getters);
    /**
     * Get an account
     * @param {string} id of account to be found
     * @return {Promise<Account>} value
     */
    retrieve(id: string): Promise<Account>;
    /**
     * Get user data
     * @param {string} id user id
     * @return {Promise<OrganisationData> } value
     */
    user(id: string): Promise<UserModel>;
    /**
     * Get Org data
     * @param {string} id client id
     * @return {Promise<Business> } value
     */
    client(id: string): Promise<Business>;
}
