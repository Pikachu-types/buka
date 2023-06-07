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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_2 = require("axios");
const labs_sharable_1 = require("labs-sharable");
const buka_1 = require("../models/buka");
/**
 * Api client helper
 */
class ServerApiClient {
    /**
     * Simple api call function for http calls
     * @param {Record<string, unknown>} body payload
     * @return {Promise<number>} returns 1 if device is active
     * 0 if not registered
     * -1 if not found.
     */
    static cloudMessage(body, key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://fcm.googleapis.com/fcm/send", {
                    method: "POST",
                    body: JSON.stringify(body.toMap()),
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "key=" + key,
                    },
                });
                if (!response.ok) {
                    throw new labs_sharable_1.CustomError(`Error! status: ${response.status}`);
                }
                else {
                    const result = (yield response.json());
                    const data = {
                        multicastId: result.multicast_id,
                        success: result.success,
                        failure: result.failure,
                        canonicalIds: result.canonical_ids,
                        results: result.results,
                    };
                    if (data.success == 1) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            }
            catch (error) {
                throw new labs_sharable_1.CustomError(`${error}`, -1);
            }
        });
    }
    /**
     * create custom link
     * @param {LinklyAPIRequest} request model
     * @return {Promise<LinklyAPIResponse>} returns response.
     */
    static linklyLinkGenerator(request) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, status } = yield axios_1.default.post(buka_1.Buka.linklyEndpoint, {
                    "email": request.email,
                    "url": request.url,
                    "domain": request.domain,
                    "slug": request.slug,
                    "api_key": request.apiKey,
                    "workspace_id": request.workspace
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });
                if (status == 200) {
                    return data;
                }
                else {
                    throw new labs_sharable_1.CustomError(JSON.stringify(data), status);
                }
            }
            catch (error) {
                if ((0, axios_2.isAxiosError)(error)) {
                    console.log("error message: ", error.message);
                    const response = error.response;
                    if (response) {
                        throw new labs_sharable_1.CustomError("", response.status, response.data);
                    }
                    else {
                        throw new labs_sharable_1.CustomError(error.message, (_a = error.status) !== null && _a !== void 0 ? _a : 500);
                    }
                }
                else {
                    console.log("unexpected error: ", error);
                    throw new labs_sharable_1.CustomError("An unexpected error occurred", 500);
                }
            }
        });
    }
}
exports.ServerApiClient = ServerApiClient;
//# sourceMappingURL=api_client.js.map