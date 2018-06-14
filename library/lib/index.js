"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classA_1 = __importDefault(require("./classA"));
var enhance_1 = __importDefault(require("./enhance"));
var Enhanced = enhance_1.default(new classA_1.default({ foo: "1" }));
exports.default = Enhanced;
