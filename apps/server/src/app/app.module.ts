import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthMiddleware } from './auth.middleware';
import { AuthController, AuthModule } from '@pc-clicer/auth';

@Module({
  imports: [AuthModule],
  controllers: [AppController, AuthController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/');
  }
}
