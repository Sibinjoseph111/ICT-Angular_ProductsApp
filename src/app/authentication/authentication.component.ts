import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {AuthenticationService} from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  isLoginMode = true;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){

    if(!form.valid) return;

    var email = form.value.email;
    var username = form.value.username;
    var password = form.value.password;

    if(this.isLoginMode){
      this.authService.loginUser(email,password).subscribe(resData=>{
        alert('Welcome '+ resData.username); 
        this.router.navigate(['/'])
      },err=>{
        alert(err.error);
      });
    }else{
      this.authService.signupUser(username,email,password).subscribe(resData=>{
        alert('User registered successfully '); 
        this.onSwitchMode();
      },err=>{
        alert(err.error);
      });
    }

    form.reset();
  }

}
