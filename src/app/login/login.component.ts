import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ValidatePassword } from '../password.validator'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router
    ) { }
  
  myForm: FormGroup
  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, ValidatePassword])
    });

    
    
  }



  getErrorMessageUsername() {
    if (this.myForm.controls.username.hasError('required')) return 'You must enter a value'
    if (this.myForm.controls.username.hasError('email')) return 'You must enter correct email'

  }

  getErrorMessagePassword() {
    if (this.myForm.controls.password.hasError('required')) return 'You must enter a value'
    if (this.myForm.controls.password.errors && !this.myForm.controls.password.errors.validPassword) return 'Password mus contain uppercase, number and special character'
  }
  username
  password
  error = false
  login() {
    this.error = false
    if (this.username == 'kintautas@gmail.com' && this.password == 'KMediapark@2019')  {
      localStorage.setItem('loggedIn', 'true')
      this.router.navigate(['table']);
    } else this.error = true
  }


}
