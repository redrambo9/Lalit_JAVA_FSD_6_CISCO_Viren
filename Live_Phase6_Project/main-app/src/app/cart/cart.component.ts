import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private eservice:ExampleService, private router:Router) { }
  selectedItems:any=[]; 
  selectedArray:any=[];
  sum=0;
  ngOnInit(): void {

    this.selectedArray=this.eservice.index;
    if(this.eservice.getsearchvalue().toLowerCase()==='honey'){
     
       for(let i = 0 ; i < this.selectedArray.length ; i++){
           this.sum+=this.eservice.Honey[this.selectedArray[i]].Price;
          this.selectedItems.push(this.eservice.Honey[this.selectedArray[i]]);

       } 
    }

    else if(this.eservice.getsearchvalue().toLowerCase()==='eggs'){
     
      for(let i = 0 ; i < this.selectedArray.length ; i++){
        this.sum+=this.eservice.Eggs[this.selectedArray[i]].Price;
         this.selectedItems.push(this.eservice.Eggs[this.selectedArray[i]]);

      } 
   }

   
   else if(this.eservice.getsearchvalue().toLowerCase()==='milk'){
     
    for(let i = 0 ; i < this.selectedArray.length ; i++){
      this.sum+=this.eservice.Milk[this.selectedArray[i]].Price;
       this.selectedItems.push(this.eservice.Milk[this.selectedArray[i]]);

    } 

    
 }

 else if(this.eservice.getsearchvalue().toLowerCase()==='bread'){
     
  for(let i = 0 ; i < this.selectedArray.length ; i++){
    this.sum+=this.eservice.Bread[this.selectedArray[i]].Price;
     this.selectedItems.push(this.eservice.Bread[this.selectedArray[i]]);

  } 

  
}

else if(this.eservice.getsearchvalue().toLowerCase()==='apple'){
     
  for(let i = 0 ; i < this.selectedArray.length ; i++){
    this.sum+=this.eservice.Apple[this.selectedArray[i]].Price;
     this.selectedItems.push(this.eservice.Apple[this.selectedArray[i]]);

  } 

  
}

   this.eservice.sum=this.sum;
  }
  
  onCheckout(){
    this.router.navigate(['/ship']);
  }
}
