import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:8080', // Allow requests from your Vue app's URL
    credentials: true,               // Allow cookies to be sent
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Accept',    // Allowed headers
  });

  await app.listen(8000); // Ensure this matches your NestJS server port
}
bootstrap();
