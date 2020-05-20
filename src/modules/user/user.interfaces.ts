import { IsString, IsNotEmpty } from "class-validator";

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