import {IsNotEmpty, IsString, IsArray} from 'class-validator'

export class ShopCreateRequestDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    shopImg: string

    @IsArray()
    addresses: string[]
}

export class ShopUpdateRequestDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    shopImg: string

    @IsArray()
    addresses: string[]
}