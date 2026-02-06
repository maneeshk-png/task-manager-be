import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    HttpStatus,
  } from '@nestjs/common';
  import { map } from 'rxjs/operators';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const response = context.switchToHttp().getResponse();
      const statusCode = response.statusCode || HttpStatus.OK;
  
      return next.handle().pipe(
        map((data) => ({
          success: true,
          statusCode,
          message: 'Request successful',
          data,
          timestamp: new Date().toISOString(),
        })),
      );
    }
  }
  