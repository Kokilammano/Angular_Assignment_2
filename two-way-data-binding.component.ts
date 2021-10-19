import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
  name:string="";
  email:string="";
  mobile:string="";
  course:string="";
  msg:string="";
  loginStatus:boolean=false;
  
 reg(){
   if(this.name=="" && this.email=="" && this.mobile=="" && this.course==""){
     this.msg="Fill all the fields";
     this.loginStatus=false;
   }else if(this.name==""){
     this.msg="Name is required";
     this.loginStatus=false;
   }else if(this.email==""){
     this.msg="Email is required";
     this.loginStatus=false;
   }else if(this.mobile==""){
     this.msg="Mobile number is required";
     this.loginStatus=false;
   }else if(this.course==""){
     this.msg="Course is required";
     this.loginStatus=false;
   }
   else{
    this.msg="Successfully registered";
    this.loginStatus=true;
   }
   
 } 
 reset(){
   this.name="";
   this.email="";
   this.mobile="";
   this.course="";
   this.msg="";
 }

  constructor() { }

  ngOnInit(): void {
  }

}
