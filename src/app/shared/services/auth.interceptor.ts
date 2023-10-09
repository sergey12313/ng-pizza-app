import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PersistenceService} from './persistence.service';
import {environment} from 'environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get(environment.localStorageTokenKey);
    if (!token) {
      return next.handle(req);
    }
    const headers = req.headers.append('Authorization', `Bearer ${token}`);
    const newReq = req.clone({headers});
    return next.handle(newReq);
  }
}
