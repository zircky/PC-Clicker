import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { validate, parse, InitDataParsed } from '@telegram-apps/init-data-node';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly token = process.env.TOKEN_TELEGRAMM_API;

  use(req: FastifyRequest, reply: FastifyReply, next: () => void) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      reply.status(401).send({ error: 'Unauthorized' });
      return;
    }

    const [authType, authData] = authHeader.split(' ');

    if (authType !== 'tma') {
      reply.status(401).send({ error: 'Unauthorized' });
      return;
    }

    try {
      validate(authData, this.token, { expiresIn: 3600 });
      (req as any).initData = parse(authData);
      next();
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  }
}
