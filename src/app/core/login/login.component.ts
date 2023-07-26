import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = "";
  pass = "";
  showError = false;

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService) { }

  close(): void {
    this.showError = false;
    this.email = '';
    this.pass = '';
    this.dialogRef.close();
  }

  save() {
    console.log(this.email+" ---- "+ this.pass);
    let login = this.loginService.login(this.email, this.pass);
    if(login)  this.close();
    else this.showError=true;
  }
}
