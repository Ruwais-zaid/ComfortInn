"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const hotelSchema = new mongoose_1.default.Schema({
    userid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    adultCount: {
        type: Number,
        required: true,
    },
    childCount: {
        type: Number,
        required: true,
    },
    facilities: [
        {
            type: String,
            required: true
        }
    ],
    pricePerNight: {
        type: Number,
        required: true,
    },
    starRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    imageURL: [
        {
            type: String,
            required: true
        }
    ],
    lastupdated: {
        type: Date,
        required: true
    }
});
const Hotel = mongoose_1.default.model("Hotel", hotelSchema);
exports.default = Hotel;
