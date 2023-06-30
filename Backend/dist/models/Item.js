"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    itemID: {
        type: String,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
    },
    itemDescription: {
        type: String,
        required: true
    }
});
exports.Item = (0, mongoose_1.model)("Item", ItemSchema);
