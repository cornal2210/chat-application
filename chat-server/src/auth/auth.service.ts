import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './token-payload';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // ...

  public getAccessToken(userId: string): string {
    const payload: TokenPayload = { userId };
    return this.jwtService.sign(payload);
  }
}
