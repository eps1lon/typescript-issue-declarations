"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = __importDefault(require("library"));
var isEnhanced = library_1.default({ foo: 'dependendent', enhanced: false });
console.log(isEnhanced);
