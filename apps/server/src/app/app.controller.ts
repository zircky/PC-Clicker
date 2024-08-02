import { Controller, Get, MiddlewareConsumer, Req, Res } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthMiddleware } from './auth.middleware';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getInitData(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    const initData = (req as any).initData;
    if (!initData) {
      return res.status(401).send({ error: 'Init data not found' });
    }
    return res.send(initData)
  }
 
}
