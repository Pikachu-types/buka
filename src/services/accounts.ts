import { CustomError } from "labs-sharable";
import { Account, DocumentTypes } from "..";
import { DatabaseFunctions } from "./database";

/**
 * Power class to interact 
 * with DB for accounts only
 */
export class AkubAccounts {
  
  /**
   * Get an account
   * @param {string} id of account to be found
   * @return {Promise<Account>} value
   */
  public static async retrieve(id: string):
    Promise<Account> {
    if (!id.includes("_")) {
      throw new CustomError("Invalid account identifier");
    }
    let accounts: Account[];
    switch (id.split("_")[0]) {
      case DocumentTypes.business.replace("_", ""):
        accounts = await DatabaseFunctions.getters.retrieveBusinesses();
        break;
      case DocumentTypes.clientUser.replace("_", ""):
        accounts = await DatabaseFunctions.getters.retrieveConsoleUsers();
        break;
      default:
        accounts = await DatabaseFunctions.getters.retrieveConsoleUsers();
        break;
    }
    const res = accounts.find(account => account?.id === id);
    return res;
  }

}