import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  
  searchvalue="";
  constructor() { }
  index:any=[];
  sum=0;
  Honey=[

   
    
    { ID :  'H01',
      Category : 'Honey',
      Image : './assets/Dabur.jpg',
      Brand : 'Dabur',
      Quantity : '250g',
      Price : 250.0

    },

    { ID :  'H02',
      Category : 'Honey',
      Image : './assets/Saffola.png',
      Brand : 'Saffola',
      Quantity : '500g',
      Price : 500.0

    }
   
  ]

  Eggs=[
    

    { ID :  'E02',
      Image : './assets/10pcseggs.jpg',
      Category : 'Eggs',
      Brand : 'KingFresh',
      Quantity : '10Pcs',
      Price : 90.0

    },
    { ID :  'E01',
      Image : './assets/30pcseggs.jpg',
      Category : 'Eggs',
      Brand : 'Freshca',
      Quantity : '30Pcs',
      Price : 350.0

    }
  ]

  Milk=[
    

    { ID :  'M02',
      Image : './assets/MotherDiary.jpg',
      Category : 'Milk',
      Brand : 'Mother Dairy',
      Quantity : '1L',
      Price : 60.0

    },
    
    { ID :  'M01',
      Image : './assets/amul.jpg',
      Category : 'Milk',
      Brand : 'Amul',
      Quantity : '500ml',
      Price : 30.0

    }
  ]

  
  Bread=[
    

    { ID :  'B02',
      Image : './assets/bread1.jpg',
      Category : 'Bread',
      Brand : 'Harvest',
      Quantity : '350g',
      Price : 60.0

    },
    
    { ID :  'B01',
      Image : './assets/bread2.jpg',
      Category : 'Bread',
      Brand : 'Britania',
      Quantity : '400g',
      Price : 30.0

    }
  ]

  Apple=[
    

    { ID :  'A01',
      Image : './assets/apple.jpg',
      Category : 'Apple',
      Brand : 'Organic Fresh',
      Quantity : '1kg',
      Price : 120.0

    }
    
    
  ]



  getsearchvalue(){

    return this.searchvalue;
  }
  setsearchvalue(searchparam:string){
    
    this.searchvalue=searchparam;
  }
}

