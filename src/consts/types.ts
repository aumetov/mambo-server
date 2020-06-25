import { Roles } from "./roles"
import { Colors } from "./colors"
import { Sizes } from "./sizes"
import { CouponTypes } from "./coupon-types"
import { Gender } from "./gender"

export type orderProductType = {
    productId: string;
    productCode: string;
    shopId: string;
    title: string;
    color: Colors;
    size: Sizes;
    qty: number;
    price: number;
}

export type userCartItemType = {
    productId: string;
    productCode: string;
    shopId: string;
    title: string;
    color: Colors;
    size: Sizes;
    qty: number;
    price: number;
}


export type shopEmployeeInfo = {
    shopId: string;
    role: Roles;
}

export type priceRange = {
    min: number;
    max: number;
}

export class HttpResponse {
    data: any;
  
    constructor(data: any) {
      this.data = data;
    }
}

export type couponInfo = {
    couponType: CouponTypes;
    value: number;
}

export type coupon = {
    categories: string[]
    collection: string
    shopId: string
    sex: Gender
    productsIds: string[]
    couponCode: string
    couponInfo: couponInfo
    startDate: string
    dueDate: string
}