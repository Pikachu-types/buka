"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSCampaignModel = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * Buka SMSCampaignModel class
*/
class SMSCampaignModel {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.id = "";
        this.audience = "";
        this.checkedOut = "";
        this.message = "";
        this.from = "";
        this.amountPaid = 0;
        this.dateSent = 0;
        this.created = 0;
        this.status = "";
        this.client = "";
        this.createdBy = "";
        this.numbers = [];
        // numbers delivered to
        this.successful = [];
        // / number of successful sends
        this.sent = 0;
        this.paid = false;
    }
    /**
     * Change record to SMSCampaignModel class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {SMSCampaignModel} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(SMSCampaignModel, obj, { excludeExtraneousValues: true });
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
     * @param {SMSCampaignModel[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {SMSCampaignModel | undefined} found object else undefined
     */
    static findOne(list, id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id)
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
], SMSCampaignModel.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "audience", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "checkedOut", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "message", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "from", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "amountPaid", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "dateSent", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "created", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "client", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "createdBy", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "numbers", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "successful", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "sent", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], SMSCampaignModel.prototype, "paid", void 0);
exports.SMSCampaignModel = SMSCampaignModel;
//# sourceMappingURL=sms_campaign.js.map