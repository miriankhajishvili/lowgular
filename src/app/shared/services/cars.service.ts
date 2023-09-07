import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CarsService extends BaseService {

getAllCars() : Observable<any>{
  return this.get<any>(`car-brands/`)

  
}

getCarSecurityFeatures(): Observable<any>{
  return this.get<any>('car-security-features/')
}

getComfortFeatures(): Observable<any>{
  return this.get<any>('car-comfort-features/')
}

}
