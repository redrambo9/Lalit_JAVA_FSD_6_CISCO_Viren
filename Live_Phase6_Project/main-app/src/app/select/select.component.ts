import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
// interface obj{
//   ID: string,
//   Brand:string,
//   Quantity:string,
//   Price:number
// }
export class SelectComponent implements OnInit {
  searchvalue="";
  sort="";
  arr:any[]=[];
 
  constructor(private eservice:ExampleService,private router:Router) {  }

  ngOnInit(): void {
   
    this.searchvalue=this.eservice.getsearchvalue();
     if(this.searchvalue.toLowerCase() === 'honey'){
      this.arr=[
    
    
        { ID :  'H02',
          Image : './assets/Saffola.png',
          Brand : 'Saffola',
          Quantity : '500g',
          Price : 500.0
    
        },

        { ID :  'H01',
        Image : './assets/Dabur.jpg',
        Brand : 'Dabur',
        Quantity : '250g',
        Price : 250.0
  
        }
       
      ];   
     }
     else if(this.searchvalue.toLowerCase() === 'eggs'){
       this.arr=[
        
      { ID :  'E02',
        Image : './assets/10pcseggs.jpg',
        Brand : 'KingFresh',
        Quantity : '10Pcs',
        Price : 90.0
  
      },
      { ID :  'E01',
        Image : './assets/30pcseggs.jpg',
        Brand : 'Freshca',
        Quantity : '30Pcs',
        Price : 350.0
  
        }
  
       ]
     }

     else if(this.searchvalue.toLowerCase() === 'milk'){
      this.arr=[
        
  
      { ID :  'M02',
        Image : './assets/MotherDiary.jpg',
        Brand : 'Mother Dairy',
        Quantity : '1L',
        Price : 60.0
  
      },

      { ID :  'M01',
        Image : './assets/amul.jpg',
        Brand : 'Amul',
        Quantity : '500ml',
        Price : 30.0

      }

      ]
    }

    else if(this.searchvalue.toLowerCase() === 'bread'){
      this.arr=[
        

    { ID :  'B02',
      Image : './assets/bread1.jpg',
      Brand : 'Harvest',
      Quantity : '350g',
      Price : 60.0

    },

    { ID :  'B01',
      Image : './assets/bread2.jpg',
      Brand : 'Britania',
      Quantity : '400g',
      Price : 30.0

    }
      ]
    }
    else if(this.searchvalue.toLowerCase() === 'apple'){

      this.arr=[

          { ID :  'A01',
            Image : './assets/apple.jpg',
            Category : 'Apple',
            Brand : 'Organic Fresh',
            Quantity : '1kg',
            Price : 120.0
      
          }
      ]
    }
  }
  
  // Honey=[
    
  //   { ID :  'H01',
  //     Brand : 'Dabur',
  //     Quantity : '250g',
  //     Price : 250.0

  //   },

  //   { ID :  'H02',
  //     Brand : 'Saffola',
  //     Quantity : '500g',
  //     Price : 500.0

  //   }


   
  // ]

  // Eggs=[
    
  //   { ID :  'E01',
  //     Brand : 'Freshca',
  //     Quantity : '30Pcs',
  //     Price : 350.0

  //   },

  //   { ID :  'E02',
  //     Brand : 'KingFresh',
  //     Quantity : '10Pcs',
  //     Price : 90.0

  //   }


   
  // ]
  cartItems:any=[];
  
  onContinue(){
     if(this.cartItems.length===0){
       alert("Select products to continue.");
       return;
     }
     this.eservice.index=this.cartItems;
     this.router.navigate(['/cart']);
  }

  onCheck(event:any,i: any){
    if(event.target.checked){
     
      this.cartItems.push(i);
    }
    else {
      if(this.cartItems.indexof(i)!==-1){
          this.cartItems.splice(this.cartItems.indexof(i),1);
      }
    }
  }

  sorting(e:any){
    console.log(this.arr)
    if(e.target.value==='low'){
      
      this.arr.sort((a,b)=>a.Price - b.Price)  
    }
    else if(e.target.value==='high'){
      this.arr.sort((a,b)=>b.Price - a.Price)  
    }
    else if(e.target.value==='name'){
      this.arr.sort((a,b) => a.Brand.localeCompare(b.Brand));
    }
    console.log(this.arr)
  }

}

