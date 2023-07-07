"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/", routes_1.default);
app.use((error, req, res) => {
    res.status(500).json({ state: "Error", message: error });
});
mongoose_1.default.connect(process.env.MONGO_DB_URL)
    .then(() => {
    console.log("db Connected");
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port 5000");
    });
})
    .catch((error) => {
    console.log("something went wrong!");
});
