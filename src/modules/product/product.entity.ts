import * as mongoose from 'mongoose';
import { productOptionType } from 'src/consts/types';

export type ProductDocument = mongoose.Document & {
    title: string;
    description: string;
    productThumbnail: string;
    price: number;
    salePrice: number;
    categories: string[];
    shopId: string;
    options: productOptionType[];
    sizes: string[];
    sex: string;
};

const optionSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

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
    options: [{
        type: optionSchema,
        required: true
    }],
    sizes: [{
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