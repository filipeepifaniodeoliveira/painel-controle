import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit() {
    console.log('LOGAMOS');
  }

  logout () {
    this.authService.logout();
  }

  setAction(action) {
    console.log(action);
   
    switch (action) {
      case 'cad':
        this.router.navigateByUrl('/home/cadastro');
        break;
      case 'list':
        this.router.navigateByUrl('/home/lista');
        break;
      case 'config':
        // this.router.navigateByUrl('/home/cadastro');
        break;
      default:
        break;
    }
  }

}
