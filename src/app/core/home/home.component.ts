import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textf = '';

  constructor(private loginService: LoginService) { }

  options: string[] = [];
  ngOnInit(): void {
    this.options = this.loginService.UserIds.map(x => x.username);
  }

  // textChange(value: string): void {
  //   console.log("val", value);
  //   if (value.includes('@')) {
  //     const filterValue = value.toLowerCase().match(/\@(.*)/) || '';
  //     this.options = this.options.filter(option => option.toLowerCase().includes(filterValue[1]));
  //   }
  // }
}
