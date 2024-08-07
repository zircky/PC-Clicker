import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { TelegramStrategy } from './strategy/telegram.strategy';
import { PrismaService } from '@pc-clicer/prisma-client';

@Module({
  imports: [PassportModule],
  // controllers: [AuthController],
  providers: [AuthService, TelegramStrategy, PrismaService],
})
export class AuthModule {}
