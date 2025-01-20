import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type loginReponse = { access_token: string };

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<loginReponse> {
    return this.httpClient.post<loginReponse>(
      'http://localhost:3000/auth/login',
      {
        username,
        password,
      }
    );
  }
}
