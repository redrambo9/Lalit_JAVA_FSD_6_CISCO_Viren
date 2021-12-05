import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SelectComponent } from './select/select.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [

  
  {path:'select',component:SelectComponent},
  {path:'',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'contactus',component:ContactComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'loginpage',component:LoginComponent},
  {path:'signUpPage',component:SignUpComponent},
  {path:'ship',component:ShippingComponent},
  {path:'**',redirectTo:'/home',pathMatch :'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
