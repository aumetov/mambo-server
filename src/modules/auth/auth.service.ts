import {Injectable} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthNotFoundException, AuthFailException } from './auth.exceptions';
import { comparePasswords } from 'src/utils/bcrypt';
import { UserSignInDto } from './auth.interfaces';

interface IAuthService {
    signIn(email: string, pass: string): Promise<string>
    comparePasswords(password: string, hashedPassword: string): Promise<boolean>
    getSignedUser(user: UserDocument): string
}

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly usersService: UserService
  ) {
  }

  comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return comparePasswords(password, hashedPassword);
  }

  getSignedUser(user: UserDocument): string {
    const payload = {
      email: user.email
    };
    return this.jwtService.sign(payload);
  }

  async validateUser(email: string): Promise<any> {
    return await this.usersService.findOneByEmail(email);
  }

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
        throw new AuthNotFoundException();
    }

    const passwordMatch = password && (await this.comparePasswords(password, user.password));

    if (!passwordMatch) {
        throw new AuthFailException();
    }

    return this.getSignedUser(user)
  }
}
