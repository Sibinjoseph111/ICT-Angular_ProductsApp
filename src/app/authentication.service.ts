import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {UserModel} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user= new UserModel(null,null,null,null);

  constructor(private http: HttpClient) {}

  loginUser(email, password){
    return this.http.post<UserModel>('http://localhost:3000/user/login',
    {
      email,
      password
    });
  }

  
  signupUser(username, email, password){
    return this.http.post<UserModel>('http://localhost:3000/user/signup',
    {
      username,
      email,
      password
    });

  }

}
