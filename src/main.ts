const envResult = require('dotenv').config({ path: `./.${process.env.NODE_ENV}.env` });

// throw error if no env file found
if (envResult.error) {
  throw envResult.error
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
