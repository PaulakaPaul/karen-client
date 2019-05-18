import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  get isAdmin() {
    return this.loginService.isAdmin()
  }

  logOut() {
    this.loginService.logOut();
  }

}
