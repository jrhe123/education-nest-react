import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { graphqlUploadExpress } from 'graphql-upload';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));
  await app.listen(3000);
}
bootstrap();
