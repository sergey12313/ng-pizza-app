import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/register-request.interface';
import {AuthResponseInterface} from '../types/auth.response';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';
import {LoginRequestInterface} from '../types/login-request.interface';
import {UserResponseInterface} from '../types/user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  private authApiUrl = environment.apiUrl + 'auth/';
  register(data: RegisterRequestInterface): Observable<AuthResponseInterface> {
    return this.httpClient.post<AuthResponseInterface>(
      `${this.authApiUrl}register`,
      data
    );
  }
  login(data: LoginRequestInterface): Observable<AuthResponseInterface> {
    return this.httpClient.post<AuthResponseInterface>(
      `${this.authApiUrl}login`,
      data
    );
  }
  getCurrentUser(): Observable<UserResponseInterface> {
    return this.httpClient.get<UserResponseInterface>(
      `${environment.apiUrl}user/profile`
    );
  }
}
