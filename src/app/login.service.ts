import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly UserIds = [
    {userid : "abc@media.com",password:"abc123","username":"tom"}, 
    {userid : "def@media.com",password:"def123","username":"dick"},
    {userid : "krati@media.com",password:"123456","username":"krati"}
  ]

  constructor(private _snackBar: MatSnackBar) { }

  get user_id(){
    let x = sessionStorage.getItem("user_id");
    return x ? JSON.parse(x) : '';
  }

  get loggedIn(){
    return this.user_id ? true : false;
  }

  login(email: string, pass: string){
    if(this.UserIds.some(x => (x.userid ==email || x.username ==email) && x.password == pass)){
      sessionStorage.setItem("user_id", JSON.stringify(email));
      this.showMessage("Login Successful!!", "Ok", "snackbar-success");
      return true;
    }
      this.showMessage("Username/ Password Incorrect", "Ok", "snackbar-fail");
      return false;
  }

  showMessage(message: string, action: string, style: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: [style]
    });
  }

}
