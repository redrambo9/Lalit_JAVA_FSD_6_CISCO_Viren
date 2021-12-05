import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  firstName='';
  lastName='';
  middleName='';
  email='';
  password='';
  confirmPassword='';
  age='';
  gender='';

  userData:any=[]
  constructor(private userDataService:UserDataService, private router: Router) { }

  ngOnInit(): void {
  }

  selectGender(e:any){
  
    if(e.target.value==='male'){
      this.gender='male';
    } 
    else if(e.target.value==='female'){
      this.gender='female';
    }
    else if(e.target.value==='other'){
      this.gender='others';
    }

  }
  
  onSignUp(){
   if(this.password!==this.confirmPassword){
     alert("Password Does Not Match!!");
     return;
   }
     this.userDataService.userData.push({

      'FirstName':this.firstName,
      'MiddleName':this.middleName,
      'LastName':this.lastName,
      'Email':this.email,
      'Password':this.password,
      'Age':this.age,
    })
    
   this.userData.push({

    'FirstName':this.firstName,
    'MiddleName':this.middleName,
    'LastName':this.lastName,
    'Email':this.email,
    'Password':this.password,
    'Age':this.age,
  })
   console.log(this.userDataService.userData)
   sessionStorage.setItem('userData',JSON.stringify(this.userDataService.userData)) 
   

  let temp = this.userDataService.getuserdata();
  //console.log(temp)
  alert("Registered Succesfully");
  this.router.navigate(['/loginpage']);
  }

}
