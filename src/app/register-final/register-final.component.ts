import { Component, OnInit, NgModule, } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-register-final',
  templateUrl: './register-final.component.html',
  styleUrls: ['./register-final.component.css']
})
@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterFinalComponent implements OnInit {

  form: String;
  constructor() { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      
      age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(45)]),
      phone: new FormControl(null, [Validators.required]),
      country: new FormControl(),
      gender: new FormControl(),
      pwGroup: new FormGroup({
        password: new FormControl(null,[Validators.required]),
        confirmPassword: new FormControl(null,[Validators.required,Validators.minLength(6)])
      }, comparePassword)
    });

  }
  loginUser(loginForm) {
    console.log(loginForm)
    this.form = loginForm;
  }


}
function checkPass(c:AbstractControl){
  const x = c.value;
  return x.password.length >= 6 ? null:{passerorr:true};
}
function comparePassword(c: AbstractControl) {
  const v = c.value; return (v.password === v.confirmPassword) ?
    null : {
      passwordnotmatch: true
    };
}


