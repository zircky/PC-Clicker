import { Injectable } from '@nestjs/common';
import { PrismaService } from '@pc-clicer/prisma-client';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async validatUser(profile: any) {
    let user = await this.prismaService.user.findUnique({
      where: {
        telegramId: profile.id.toString()
      }
    })
    if (!user) {
      user = await this.prismaService.user.create({
        data: {
          telegramId: profile.id.toString(),
          username: profile.username,
        }
      });
    }
    return user;
  }
}
