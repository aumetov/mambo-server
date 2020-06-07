import { Controller, Post, Body } from '@nestjs/common';
import { HttpResponse } from '../../consts/types';
import { AuthService } from './auth.service';
import { UserSignInDto } from './auth.interfaces';

@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService){}

    @Post('login')
    async signIn(@Body() userSignInDto: UserSignInDto): Promise<HttpResponse> {
        const token = await this.service.signIn(userSignInDto.email, userSignInDto.password);
        return new HttpResponse({ token });
    }

}