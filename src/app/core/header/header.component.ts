import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  simpleDialog: MatDialogRef<LoginComponent>;

  constructor(private dialogModel: MatDialog, public loginService: LoginService) { }

  loginDialog() {
    this.simpleDialog = this.dialogModel.open(LoginComponent, { width: '500px', panelClass: "bg-light", autoFocus: false});
  }

  // gallery() {
  //   if (this.loginService.loggedIn) {
  //     this.router.navigate(['gallery']);
  //   } else {
  //     this.loginDialog();
  //   }
  // }

  logout(){
    sessionStorage.removeItem("user_id");
    this.loginService.showMessage("Logout Successful!!", "OK", "snackbar-success");
  }


}
