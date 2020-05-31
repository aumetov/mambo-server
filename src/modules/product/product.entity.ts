import * as mongoose from 'mongoose';

export type ProductDocument = mongoose.Document & {
    title: string;
    description: string;
    productThumbnail: string;
    price: number;
    salePrice: number;
    categories: string[];
    shopId: string;
    productImages: string[];
    sizes: string[];
    colors: string[];
    sex: string;
};

export const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    productThumbnail: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    salePrice: {
        type: String,
        required: true
    },
    categories: [{
        type: String,
        required: true
    }],
    shopId: {
        type: String,
        required: true
    },
    productImages: [{
        type: String,
        required: true
    }],
    sizes: [{
        type: String,
        required: true
    }],
    colors: [{
        type: String,
        required: true
    }],
    sex: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    }
}, { timestamps: true });

export const Product = mongoose.model<ProductDocument>("Product", productSchema);