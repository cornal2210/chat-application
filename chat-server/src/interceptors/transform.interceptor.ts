import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class ResponseData<T> {
  records?: number;
  page?: number;
  message?: string;
  success?: boolean;
  data: T;
  total?: number;
  matchedItems?: number;
}

@Injectable()
export class TransformInterCeptor<T>
  implements NestInterceptor<T, ResponseData<T>>
{
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseData<T>> {
    return next.handle().pipe(
      map((data) => {
        if (data?.data) {
          return { success: true, ...data };
        }
        return { data, success: true };
      }),
    );
  }
}
