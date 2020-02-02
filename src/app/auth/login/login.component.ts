import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserI } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  
  public actionComponent: string = '';

  ngOnInit() {
    this.actionComponent = 'init';
    this.router.navigateByUrl('/auth/login');
  }

  setAction(action) {
    this.actionComponent = action;
  }

  onLogin(form): void {
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/home/home');
    });
  }

  onRegister(form): void {
    this.authService.register(form.value).subscribe(res => {
      if (!res) {
        // exibir mensagem de erro
      } else {
        this.actionComponent = 'login';
      }
    })
  }

  retunPage() {
    this.actionComponent = 'init';
  }

}
