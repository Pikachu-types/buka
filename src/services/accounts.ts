import { CustomError } from "labs-sharable";
import { Account, Business, DocumentTypes, UserModel } from "..";
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
        accounts = await DatabaseFunctions.getters.retrieveUsers();
        break;
    }
    const res = accounts.find(account => account?.id === id);
    return res;
  }

  /**
   * Get user data
   * @param {string} id user id
   * @return {Promise<OrganisationData> } value
   */
  public static async user(id: string): Promise<UserModel> {
    const val = await this.retrieve(id);
    if (val !== undefined && UserModel.isOfInstance(val)) {
      return val as UserModel;
    }
    throw new CustomError("User does not exist");
  }

  /**
   * Get Org data
   * @param {string} id client id
   * @return {Promise<Business> } value
   */
  public static async client(id: string): Promise<Business> {
    if (!id.includes("_")) {
      id = `${DocumentTypes.business}${id}`;
    }
    const client = await this.retrieve(id);
    if (client !== undefined && Business.isOfInstance(client)) {
      return client as Business;
    }
    throw new CustomError("No such business exists");
  }

}