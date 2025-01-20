import { Injectable } from '@angular/core';
import { AuthService, loginReponse } from '../../../api/auth.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private authService: AuthService) {}

  login(username: string, password: string): Observable<loginReponse> {
    return this.authService.login(username, password).pipe(tap((data) => {}));
  }
}
