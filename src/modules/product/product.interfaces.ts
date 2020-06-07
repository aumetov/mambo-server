import { IsNotEmpty, IsNumber, IsString, IsOptional, IsArray, IsIn, IsEnum } from "class-validator";
import { Gender } from "src/consts/gender";
import { Colors } from "src/consts/colors";
import { Sizes } from "src/consts/sizes";
import { priceRange } from "src/consts/types";

export class ProductCreateRequestDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsOptional()
    description: string

    @IsArray()
    @IsOptional()
    productThumbnail: any

    @IsArray()
    @IsOptional()
    productImages: any

    @IsString()
    @IsOptional()
    productCode: string;

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
    colors: Colors[]

    @IsArray()
    @IsNotEmpty()
    sizes: Sizes[]

    @IsNotEmpty()
    sex: Gender
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
    productImages: string[]

    @IsString()
    @IsOptional()
    productCode: string;

    @IsArray()
    @IsEnum(Colors)
    @IsNotEmpty()
    colors: Colors[];

    @IsArray()
    @IsEnum(Sizes)
    @IsNotEmpty()
    sizes: Sizes[];

    @IsString()
    @IsEnum(Gender)
    @IsNotEmpty()
    sex: Gender
}

export class ProductCreateBodyDto {
    files: any

    @IsNotEmpty()
    productInfo: ProductCreateRequestDto
}

export class ProductFiltersDto {
    @IsArray()
    @IsOptional()
    categories: string[]

    @IsArray()
    @IsOptional()
    colors: Colors[]

    @IsArray()
    @IsOptional()
    sizes: Sizes

    @IsString()
    @IsEnum(Gender)
    @IsOptional()
    sex: Gender

    @IsOptional()
    priceRange: priceRange
}