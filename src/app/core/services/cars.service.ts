import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable} from 'rxjs'
import { ICars } from '../interfaces/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService extends BaseService {

getCars() : Observable<ICars[]>{
  return this.get<any>(`car-brands/`)
}

getCarsSecFeat(): Observable<ICars[]>{
  return this.get<any>('car-security-features/')
}

getCarsComfFeat(): Observable<ICars[]>{
  return this.get<any>('car-comfort-features/')
}

}
