import { Roles } from "./roles"
import { Colors } from "./colors"
import { Sizes } from "./sizes"

export type orderProductType = {
    productId: string;
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