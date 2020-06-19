import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { Sizes } from "src/consts/sizes";
import { Colors } from "src/consts/colors";

export class UserCreateRequestDto {
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    phoneNumber: string

    @IsString()
    @IsNotEmpty()
    password: string
}

export class UserUpdateRequestDto {
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    phoneNumber: string

    @IsString()
    @IsNotEmpty()
    password: string
}

export class AddItemToCartDto {
    @IsString()
    @IsNotEmpty()
    productId: string;

    @IsString()
    @IsNotEmpty()
    productCode: string;

    @IsString()
    @IsNotEmpty()
    shopId: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    color: Colors;

    @IsString()
    @IsNotEmpty()
    size: Sizes;

    @IsNumber()
    @IsNotEmpty()
    qty: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}
