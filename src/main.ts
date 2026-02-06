import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Removes fields not in DTO.
      forbidNonWhitelisted: true,  //Throws error if extra fields exist.  400 bad request
      transform: true,  //Converts types automatically
      transformOptions: {    //Allows DTO types to auto convert without manual decorators.
        enableImplicitConversion: true,  
      },
      forbidUnknownValues: true,  //Rejects weird payloads like:  like null [] true
      stopAtFirstError: false,  //Returns all validation errors, not just first.
      validationError: {
        target: false,  //Removes DTO object from error response (security).
        value: false,   //Prevents returning user’s invalid value in response.
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter()); // Register HttpGlobal Filters Globally
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
