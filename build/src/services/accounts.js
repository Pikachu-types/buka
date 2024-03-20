"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AkubAccounts = void 0;
const labs_sharable_1 = require("labs-sharable");
const __1 = require("..");
const database_1 = require("./database");
/**
 * Power class to interact
 * with DB for accounts only
 */
class AkubAccounts {
    /**
     * Get an account
     * @param {string} id of account to be found
     * @return {Promise<Account>} value
     */
    static retrieve(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id.includes("_")) {
                throw new labs_sharable_1.CustomError("Invalid account identifier");
            }
            let accounts;
            switch (id.split("_")[0]) {
                case __1.DocumentTypes.business.replace("_", ""):
                    accounts = yield database_1.DatabaseFunctions.getters.retrieveBusinesses();
                    break;
                case __1.DocumentTypes.clientUser.replace("_", ""):
                    accounts = yield database_1.DatabaseFunctions.getters.retrieveConsoleUsers();
                    break;
                default:
                    accounts = yield database_1.DatabaseFunctions.getters.retrieveConsoleUsers();
                    break;
            }
            const res = accounts.find(account => (account === null || account === void 0 ? void 0 : account.id) === id);
            return res;
        });
    }
}
exports.AkubAccounts = AkubAccounts;
//# sourceMappingURL=accounts.js.map