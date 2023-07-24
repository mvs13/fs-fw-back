import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private user: any;

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    this.user = await this.usersService.findOneByMail(email);
    if (this.user && (await bcrypt.compare(pass, this.user.password))) {
      const { ...result } = this.user;
      return result;
    }
    return null;
  }

  async login(user4login: any) {
    const payload = { email: user4login.email, sub: user4login.id };
    return {
      access_token: this.jwtService.sign(payload),
      user_id: this.user.id,
    };
  }
}
