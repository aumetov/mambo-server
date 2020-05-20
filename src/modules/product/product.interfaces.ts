import { IsNotEmpty, IsNumber, IsString, IsOptional, IsArray, IsIn } from "class-validator";
import { productOptionType } from "src/consts/types";

export class ProductCreateRequestDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    @IsOptional()
    productThumbnail: string

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsNumber()
    @IsNotEmpty()
    salePrice: number

    @IsArray()
    @IsNotEmpty()
    categories: string[]

    @IsString()
    @IsNotEmpty()
    shopId: string

    @IsArray()
    @IsNotEmpty()
    options: productOptionType[]

    @IsArray()
    @IsNotEmpty()
    sizes: string[]

    @IsIn(['Male', 'Female'])
    @IsNotEmpty()
    sex: string
}

export class ProductUpdateRequestDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    @IsOptional()
    productThumbnail: string

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsNumber()
    @IsNotEmpty()
    salePrice: number

    @IsArray()
    @IsNotEmpty()
    categories: string[]

    @IsString()
    @IsNotEmpty()
    shopId: string

    @IsArray()
    @IsNotEmpty()
    options: productOptionType[]

    @IsArray()
    @IsNotEmpty()
    sizes: string[]

    @IsIn(['Male', 'Female'])
    @IsNotEmpty()
    sex: string
}