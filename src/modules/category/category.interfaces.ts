import {IsNotEmpty, IsString} from 'class-validator'

export class CategoryCreateRequestDto {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    parent: string

    @IsNotEmpty()
    @IsString()
    displayTitle: string
}

export class CategoryUpdateRequestDto {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    parent: string

    @IsNotEmpty()
    @IsString()
    displayTitle: string
}