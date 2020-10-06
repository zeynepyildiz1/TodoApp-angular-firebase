import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if ("user" in localStorage) {
      {this.router.navigate(['/home'])}
  } 
  
    //if(this.authservice.isUserEmailLoggedIn){this.router.navigate(['/home'])}
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  login(form?:NgForm)
  {
    this.clearErrorMessage();
    let data = Object.assign({}, form.value);//length özelliğine sahip olması için object assign kullandık.
    console.log("form", form.value);
    if (this.validateForm(data.email, data.password)){
      this.authService.loginWithEmail(data.email, data.password)
        .then(() => {
      
         this.router.navigate(['/home']);

        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login'])
        })
    }
  }

  validateForm(email, password) {
    console.log("email",email,"password",password);
    if (email.lenght === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}