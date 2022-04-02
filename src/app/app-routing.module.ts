import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'book', component : CreateBookingComponent},
  {path:'confirm', component: ConfirmBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
