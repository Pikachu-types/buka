import { Account } from "..";
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
}
