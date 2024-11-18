import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/EmployeebyDepartments/models/Employee';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DepartmentservicesService {

  constructor(private http:HttpClient) { }

  empleadosporDepartamento(emp:number):Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${environment.urlProduccion}Employee/EmployeebyDeparment?IdDeparment=${emp}`);
  }
}
