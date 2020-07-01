import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'r-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  @Output() signupform = new EventEmitter()

  public signupdata = {
    fname :"",
    lname : "",
    email : "",
    password : "",
    confirmpassword : ""
  }

  ngOnInit(): void {
  }

  emaildata(email){
    this.signupdata.email = email
  }
  passworddata(password){
    this.signupdata.password = password
  }
  confirmpassworddata(confirmpassword){
    this.signupdata.confirmpassword = confirmpassword
  }
  fname(fname){
    this.signupdata.fname = fname
  }
  lname(lname){
    this.signupdata.lname = lname
  }
  onsubmit(){
    this.signupform.emit(this.signupdata)
    console.log(this.signupdata)
  }

}
