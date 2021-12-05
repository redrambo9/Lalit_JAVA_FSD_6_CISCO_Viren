import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
   
  sum=0;
  constructor(private eservice: ExampleService) { }
   
   orderId = Math.floor((Math.random() * 100000000) + 1);
   txnId =  Math.floor((Math.random() * 10000000) + 4);
  ngOnInit(): void {

    this.sum=this.eservice.sum;
  }



}
