import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { InternalError } from 'src/domain/error.model';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();

    // Implement custom error filter to return same error object as other API responses
    const error = new InternalError('INTERNAL_FAILURE', exception.message);
    response.status(exception.status).json(error);
  }
}