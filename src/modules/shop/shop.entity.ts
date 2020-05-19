import * as mongoose from 'mongoose';

export type ShopDocument = mongoose.Document & {
    name: string;
    shopImg: string;
    addresses: string[];
};

export const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shopImg: {
        type: String,
        required: true
    },
    addresses: [{
        type: String
    }],
}, { timestamps: true });

export const Shop = mongoose.model<ShopDocument>("Shop", shopSchema);