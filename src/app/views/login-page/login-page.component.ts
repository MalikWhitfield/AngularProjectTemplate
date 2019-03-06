import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  login(){
    console.log('Success. Logging {{user.username}} in...')
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
