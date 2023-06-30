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
const Item_1 = require("../models/Item");
class ItemController {
    constructor() {
        this.saveItem = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let item = new Item_1.Item(req.body);
                let savedItem = yield item.save();
                return res
                    .status(200)
                    .json({ message: "Sucessfully saved..!", responseData: savedItem });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "Unknown Error!" });
                }
            }
        });
        this.retriveAllItems = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let items = yield Item_1.Item.find();
                return res
                    .status(200)
                    .json({ message: "Successfully Loaded..!", responseData: items });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "Unknown Error!" });
                }
            }
        });
        this.updateItem = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                let updateItem = yield Item_1.Item.findByIdAndUpdate(id, req.body, {
                    //to dispaly updated new object 
                    new: true,
                });
                return res.status(200).json({
                    message: "Successfully Updated..!",
                    responseData: updateItem,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "Unknown Error!" });
                }
            }
        });
        this.deleteItem = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                let deleteItem = yield Item_1.Item.findByIdAndDelete(id);
                if (!deleteItem) {
                    throw new Error("Failed to Delete Item..!");
                }
                return res
                    .status(200)
                    .json({
                    message: "successfully Deleted..!",
                    responseData: deleteItem,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "Unknown Error!" });
                }
            }
        });
    }
}
exports.default = ItemController;
