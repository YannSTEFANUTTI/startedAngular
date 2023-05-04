import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const startTime = Date.now();
        return next.handle(req).pipe(
            tap(response => {
                if (response instanceof HttpResponse) {
                    const elapsedTime = Date.now() - startTime;
                    console.log(`La requête a pris ${elapsedTime} ms.`);
                }
            })
        );
    }
}
