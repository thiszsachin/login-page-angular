import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorEmail = "";
  errorPassword = "";
  route: any;

  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick(){

    let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let ans = mail.test(this.username);
    // let res = this.username.match(mail);
    if(this.username === ""){
      this.errorEmail = "Email Cannot be Empty"
    }else if(!ans){
      this.errorEmail = "Invalid Email"
    }else if(this.username !== "" && ans){
      this.errorEmail = ""
    }
    if(this.password === ""){
      this.errorPassword = "Password cannot be Empty"
    }else if(this.password.length < 6){
      this.errorPassword = "Password is too short"
    }else if(this.password.length >= 6){
      this.errorPassword = ""
    }

    if(this.errorEmail == "" && this.errorPassword == ""){
        window.location.href = "https://www.forrester.com/bold";
    }
  }

}
