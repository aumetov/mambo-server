import * as mongoose from 'mongoose';
import { Gender } from 'src/consts/gender';
import { couponInfo } from 'src/consts/types';
import { CouponTypes } from 'src/consts/coupon-types';

export type CouponDocument = mongoose.Document & {
    categories: string[];
    collection: string;
    shopId: string;
    sex: Gender;
    productsIds: string[];
    couponCode: string;
    couponInfo: couponInfo;
    startDate: string;
    dueDate: string;
};

const couponInfoSchema = new mongoose.Schema({
    couponType: {
        type: String,
        enum: Object.keys(CouponTypes),
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

export const couponSchema = new mongoose.Schema({
    categories: [{
        type: String,
        required: false
    }],
    collection: {
        type: String,
        required: false
    },
    shopId: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum: Object.keys(Gender),
        required: true
    },
    productsIds: [{
        type: String,
        required: false
    }],
    couponCode: {
        type: String,
        required: true
    },
    couponInfo: {
        type: couponInfoSchema,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });

export const Coupon = mongoose.model<CouponDocument>("Coupon", couponSchema);