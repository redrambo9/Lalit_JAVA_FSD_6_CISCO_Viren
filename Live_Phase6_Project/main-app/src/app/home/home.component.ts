import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../example.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  searchString="";

  product=["honey","eggs","milk","bread","apple"];
  name:any='';
  constructor(private exampleservice:ExampleService,private router:Router, private userDataService:UserDataService) { }

  ngOnInit(): void {
    
    this.name=sessionStorage.getItem('firstName');
    if(this.name === null){
      this.name='';
    }
    console.log(this.name)
    
  }
  onclick2(){

    alert("Search Your Product in the Search bar!!");

  }

  

  onclick(){
    
    if(this.userDataService.firstName===''){

      alert("Please Login First")
      this.router.navigate(['/loginpage']);
      return;
    }
    let index=-1;
    let flag =0;
     for(let i = 0 ; i < this.product.length ; i++){
          
        if(this.searchString.toLowerCase() === this.product[i]){
            index=i;
            flag=1;
            break;
        }
        
     }
     if(flag===1){
        this.exampleservice.setsearchvalue(this.product[index]);
        this.router.navigate(['/select']);
     }
     else{
       alert(" Sorry😞!! This Product is Not Available at the moment!!.");
     }
    
  }

  onselect(e:any){
    if(e.target.value=='logout'){
      
      sessionStorage.setItem('firstName','');
      window.location.reload();
      //this.router.navigate(['/']);
    }
   
  }

  

}
