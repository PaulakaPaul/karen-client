import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit() {
    const model = this.loginForm.value as Login;
    this.userService.logIn(model)
      .subscribe(
        token => this.loginService.saveToken(token),
        error => {
          this.clearCredentials();
          this.snackBar.open("Bad credentials", "", { duration: 3000 })
        }
      )
  }

  private clearCredentials() {
    this.loginForm.reset();
  }

}
