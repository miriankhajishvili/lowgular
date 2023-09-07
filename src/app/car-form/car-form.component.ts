import { Component, OnInit } from '@angular/core';
import { CarsService } from '../shared/services/cars.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  Allcars : any[] = []
  AllCarsSecurityFeatures: any[] = []
  comfortFeatures: any[] = []

  constructor(

    private carService: CarsService
  ) { }

  ngOnInit(): void {
  this.carService.getAllCars().subscribe( res => {
    this.Allcars = res
 
   })

   this.carService.getCarSecurityFeatures().subscribe( res => {
    this.AllCarsSecurityFeatures = res
   })

   this.carService.getComfortFeatures().subscribe(res => {
    this.comfortFeatures = res
   })
  }

}
