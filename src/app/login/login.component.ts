import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = "";
  email = "";
  facebook = "";
  twitter = "";
  website = "";
  tel = "";
  form:String;

  onSubmit(formRegister){
    console.log(formRegister)
    this.form = formRegister.value;
    if(formRegister.invalid){
      formRegister.reset();
    }
  }
}
