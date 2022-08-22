import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {Account} from "../../model/account";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './../../../assets/css/bootstrap.min.css',
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder:FormBuilder, private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.accountService.login().subscribe(data =>{
      const user = data.find((a:Account)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      } );
      if(user){
        alert("Đăng nhập thành công");
        this.loginForm.reset();
        this.router.navigate(['home'])
      }else{
        alert("Email hoặc mật khẩu không chính xác")
      }
    },error => {
      alert("Đăng nhập thất bại")
    })
  }

}
