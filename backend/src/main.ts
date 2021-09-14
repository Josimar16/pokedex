import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.BASE_URL || '/pokedex/api');
  app.enableCors();
  await app.listen(process.env.APP_PORT, () => {
    console.log(`Application running in port: `, process.env.APP_PORT)
  });
}
bootstrap();
