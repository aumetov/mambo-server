import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: "temporary_secret_key"
        }),
    ],
    controllers: [AuthController],
    exports: [PassportModule, AuthService],
    providers: [AuthService, AuthStrategy]
})
export class AuthModule {};