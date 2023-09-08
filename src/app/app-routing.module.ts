import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarFormComponent } from './car-form/car-form.component';

const rauterRaha: Routes = [
  { path: 'cars',  component: CarFormComponent }

];




@NgModule({
  imports: [RouterModule.forRoot([])],


  exports: [RouterModule]
})


export class AppRoutingModule { }
