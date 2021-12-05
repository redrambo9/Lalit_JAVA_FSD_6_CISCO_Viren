import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
   
  userData:any=[];
  firstName='';
  constructor() { }
  getuserdata(){
    return this.userData;
  }
}
