"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationRequest = void 0;
const class_transformer_1 = require("class-transformer");
const labs_sharable_1 = require("labs-sharable");
/**
 * Console invitation request
*/
class InvitationRequest {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.token = "";
        this.name = "";
        this.creator = "";
        this.org = "";
        this.iat = 0;
        this.exp = 0;
        this.invited = "";
        this.role = "";
        this.used = false;
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {InvitationRequest} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(InvitationRequest, obj, { excludeExtraneousValues: true });
        return result;
    }
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString() {
        return JSON.stringify(this);
    }
    /**
     * Helper class function to find one specific object based on id
     *
     * @param {InvitationRequest[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {InvitationRequest | undefined} found object else undefined
     */
    static findOne(list, id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].token === id ||
                (0, labs_sharable_1.equalToIgnoreCase)(list[i].invited, id))
                return list[i];
        }
        return;
    }
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap() {
        return JSON.parse(this.toJsonString());
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], InvitationRequest.prototype, "token", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], InvitationRequest.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], InvitationRequest.prototype, "creator", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], InvitationRequest.prototype, "org", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], InvitationRequest.prototype, "iat", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], InvitationRequest.prototype, "exp", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], InvitationRequest.prototype, "invited", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], InvitationRequest.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], InvitationRequest.prototype, "used", void 0);
exports.InvitationRequest = InvitationRequest;
//# sourceMappingURL=invitation:request.js.map