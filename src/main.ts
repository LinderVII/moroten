import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import * as session from 'express-session';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  //app.setGlobalPrefix('api');
  app.enableCors({ origin: 'http://localhost:3000' });
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(4000);
}

bootstrap();
