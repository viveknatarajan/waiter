import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    const { username, password } = this.loginForm.value;
    this.loginService.login(username!, password!).subscribe({
      next: () => this.router.navigate(['products']),
    });
  }
}
