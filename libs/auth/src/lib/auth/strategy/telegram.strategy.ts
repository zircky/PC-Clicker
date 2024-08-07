import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-telegram'
import { AuthService } from '@pc-clicer/auth';

@Injectable()
export class TelegramStrategy extends PassportStrategy(Strategy, 'telegram') {
  constructor(private authService: AuthService) {
    super({ botToken: process.env.TELEGRAM_BOT_TOCKEN });
  }

  async validate(payload: any) {
    const user = await this.authService.validatUser(payload.id);

    if(!user) {
      throw new UnauthorizedException()
    }

    return user;
  }
}
