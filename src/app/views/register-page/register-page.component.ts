import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
user={
  email: "",
  username: "",
  password: ""

}

  register(){
console.log("Registering new user...")
return true
  }
  constructor() { }

  ngOnInit() {
  }

}
