import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
   
  sum=0;
  constructor(private router:Router,private eservice:ExampleService) { }

  ngOnInit(): void {
    this.sum=this.eservice.sum;
  }

  onShip(){
    this.router.navigate(['/checkout']);
  }

}
