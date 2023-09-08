import { Component, OnInit } from '@angular/core';
import { CarsService } from '../core/services/cars.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  cars : any[] = []
  carsSecFeat: any[] = []
  carsComFeatures: any[] = []

  dataSource = this.cars


  constructor(private carService: CarsService){}

  getAllCars(){
    this.carService.getCars().subscribe( res => {
      this.cars = res
   
     })
  }

  getCarsSecFeat(){
    this.carService.getCarsSecFeat().subscribe( res => {
      this.carsSecFeat = res
     })
  }

  getCarsComfFeat(){
    this.carService.getCarsComfFeat().subscribe(res => {
      this.carsComFeatures = res
     })
  }

  addRows() {

    this.carsSecFeat.push({})
    
   
  }


  ngOnInit(): void {

    this.getAllCars()
    this.getCarsSecFeat()
 
    this.getCarsComfFeat()

  }

}
