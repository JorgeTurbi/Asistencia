import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { ActivatedRoute } from '@angular/router';
import { DepartmentservicesService } from '../services/departmentservices.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {
  id:number | null =null;
  Empleados:Employee[]=[];
  constructor(private route: ActivatedRoute, private emp:DepartmentservicesService ) {
   
   }

   onClick()
   {
    
   }
  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    // throw new Error('Method not implemented.');
    console.log("Wellcome")
    this.loadEmpleados(this.id);
  }


    loadEmpleados(id:number)
    {
        this.emp.empleadosporDepartamento(id).subscribe({
          next:(item:Employee[])=>{
            this.Empleados=item;
            console.log("====>",this.Empleados)
          },
          error:(err:any)=>console.log("Error recibiendo lista",err)
        });
    }
}
