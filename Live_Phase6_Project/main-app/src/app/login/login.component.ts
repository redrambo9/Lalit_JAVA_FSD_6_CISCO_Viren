import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email='';
  password='';
  userData:any=[]
  constructor(private router:Router, private userDataService:UserDataService) { }
  
  ngOnInit(): void {
  }
  toSignUp(){
    
    this.router.navigate(['/signUpPage'])

  }
  onlogin(){
    this.userData=JSON.parse(sessionStorage.getItem('userData')|| '{}');
    let i= this.userData.findIndex((obj:any)=>obj.Email===this.email && obj.Password===this.password);
   console.log(i)
   if(i===-1){
     alert(" Sorry😞!! No User Found!!");
   }
   else{
    console.log(this.userData);
     this.userDataService.firstName=this.userData[i].FirstName;
     sessionStorage.setItem('firstName',this.userData[i].FirstName);
     this.router.navigate(['/']);
   }

    
    
  }
}
