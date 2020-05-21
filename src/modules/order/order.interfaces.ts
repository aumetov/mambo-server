import { IsString, IsNotEmpty, IsArray } from "class-validator";
import { orderProductType } from "src/consts/types";

export class OrderCreateRequestDto {
    @IsString()
    @IsNotEmpty()
    userId: string

    @IsArray()
    @IsNotEmpty()
    products: orderProductType[]

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
    @IsNotEmpty()
    contactNumber: string
}

export class OrderUpdateRequestDto {
    @IsString()
    @IsNotEmpty()
    userId: string

    @IsArray()
    @IsNotEmpty()
    products: orderProductType[]

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
    @IsNotEmpty()
    contactNumber: string
}