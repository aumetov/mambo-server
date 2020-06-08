import { Gender } from "src/consts/gender";
import { couponInfo } from "src/consts/types";

export class CreateCouponRequestDto {
    categories: string[];
    collection: string;
    shopId: string;
    sex: Gender;
    productsIds: string[];
    couponCode: string;
    couponInfo: couponInfo;
    startDate: string;
    dueDate: string;
}

export class UpdateCouponRequestDto {
    _id: string;
    categories: string[];
    collection: string;
    shopId: string;
    sex: Gender;
    productsIds: string[];
    couponCode: string;
    couponInfo: couponInfo;
    startDate: string;
    dueDate: string;
}