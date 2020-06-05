import { IsNotEmpty, IsNumber, IsString, IsOptional, IsArray, IsIn } from "class-validator";

export class ProductCreateBodyDto {
    files: any

    @IsNotEmpty()
    productInfo: ProductCreateRequestDto[]
}

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
    colors: string[]

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
    productImages: string[]

    @IsArray()
    @IsNotEmpty()
    colors: string[]

    @IsArray()
    @IsNotEmpty()
    sizes: string[]

    @IsIn(['Male', 'Female'])
    @IsNotEmpty()
    sex: string
}