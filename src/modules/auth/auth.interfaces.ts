import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class UserSignInDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}