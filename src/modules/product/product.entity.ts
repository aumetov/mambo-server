import * as mongoose from 'mongoose';
import { Sizes } from 'src/consts/sizes';
import { Colors } from 'src/consts/colors';
import { Gender } from 'src/consts/gender';

export type ProductDocument = mongoose.Document & {
    title: string;
    description: string;
    productThumbnail: string;
    price: number;
    salePrice: number;
    categories: string[];
    shopId: string;
    productImages: string[];
    sizes: Sizes[];
    colors: Colors[];
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
        enum: Sizes,
        required: true
    }],
    colors: [{
        type: String,
        enum: Colors,
        required: true
    }],
    sex: {
        type: String,
        enum: Gender,
        required: true
    }
}, { timestamps: true });

export const Product = mongoose.model<ProductDocument>("Product", productSchema);