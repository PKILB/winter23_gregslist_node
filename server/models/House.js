import { Schema } from "mongoose";



export const HouseSchema = new Schema(
    {
        levels: { type: Number, required: true, min: 1, max: 4, default: 1 },
        price: { type: Number, required: true, min: 100000, max: 1000000, default: 100000 },
        description: { type: String, required: true, maxlength: 100,},
        bedrooms: {type: Number, required: true, min: 1, max: 6, default: 1 },
        bathrooms: {type: Number, required: true, min: 1, max: 6, default: 1 },
    }
    {timestamps: true, toJSON: { virtuals: true} }
)