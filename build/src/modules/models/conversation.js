"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModelModel = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * MessageModel class
*/
class MessageModelModel {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.id = "";
        this.conversationID = "";
        this.type = "";
        this.recipient = "";
        this.sender = "";
        this.content = "";
        this.created = 0;
        this.lut = 0; // last updated time
        this.read = false;
        this.media = [];
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {MessageModelModel} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(MessageModelModel, obj, { excludeExtraneousValues: true });
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
     * @param {MessageModelModel[]} list an array to sort from and find given
     * @param {string} id provide the needed id to match for
     * @return {MessageModelModel | undefined} found object else undefined
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
], MessageModelModel.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], MessageModelModel.prototype, "conversationID", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], MessageModelModel.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], MessageModelModel.prototype, "recipient", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], MessageModelModel.prototype, "sender", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], MessageModelModel.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], MessageModelModel.prototype, "created", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], MessageModelModel.prototype, "lut", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], MessageModelModel.prototype, "read", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], MessageModelModel.prototype, "media", void 0);
exports.MessageModelModel = MessageModelModel;
//# sourceMappingURL=conversation.js.map