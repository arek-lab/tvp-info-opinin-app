import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../../services/toast.service';

export const httpErrorInterceptor: (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => Observable<HttpEvent<unknown>> = (req, next) => {
  const toastService = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Internal server error';

      if (error.error && error.error.msg) {
        errorMessage = error.error.msg;
      }

      toastService.show(errorMessage, { classname: 'bg-light text-danger' });

      return throwError(() => error);
    })
  );
};
