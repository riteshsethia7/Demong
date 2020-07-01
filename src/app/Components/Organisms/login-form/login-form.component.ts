import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'r-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  @Output() loginform = new EventEmitter()


  public logindata = {
    email : "",
    password : ""
  }

  ngOnInit(): void {
  }

  emaildata(email){
    this.logindata.email = email
  }
  passworddata(password){
    this.logindata.password = password
  }
  onsubmit(){
    console.log(this.logindata)
    this.loginform.emit(this.logindata)
  }

}
