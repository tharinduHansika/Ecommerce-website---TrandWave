"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ItemController_1 = __importDefault(require("../controllers/ItemController"));
class ItemRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.itemController = new ItemController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.itemController.saveItem);
            this.router.get("/", this.itemController.retriveAllItems);
            this.router.put("/:id", this.itemController.updateItem);
            this.router.delete("/:id", this.itemController.deleteItem);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = ItemRoutes;
