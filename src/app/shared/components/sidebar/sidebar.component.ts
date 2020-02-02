import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public user: any = {
    name: '',
    protocolo: ""
  }

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.getDataUser();
  }

  logout () {
    this.authService.logout();
  }

  getDataUser() {
    let data = JSON.parse(localStorage.getItem("dataLocal"));
    this.user.name = data.name;
    this.user.protocolo = data.id;
  }

}
