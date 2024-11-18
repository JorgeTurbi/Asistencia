import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DepService {

  constructor(private http:HttpClient) { }


  getDepartments():Observable<Category[]>
  {
    return this.http.get<Category[]>(`${environment.urlProduccion}Employee/deparmentList`);
  }
  
}
