import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { DepService } from '../services/dep.service';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.page.html',
  styleUrls: ['./departamento.page.scss'],
})
export class DepartamentoPage implements OnInit {
  departamentos:Category[]=[];
  // EmployeeList:Employee[]=[];
  data : any[]=[]
  result: string ="";
  constructor(private dep:DepService,private router:Router, 
    private actionSheetController: ActionSheetController,
  private NavCtrl : NavController
  ) { }
  ngOnInit(): void {
   this.getDepartamentos();
  }

  

  getDepartamentos()
  {
    this.dep.getDepartments().subscribe({
      next:(item:Category[]

      )=>{
        this.data = item
        console.log(item)
        this.departamentos=item;},
      error:(err:any)=>{console.log("====>",err)}

  
    });
  }


  onClick(id : any)
  {
      this.router.navigate(['/empleados',id]);

  }

  // employeebyDepartament(departmentId:number)
  // {
  //   this.dep.empleadosporDepartamento(departmentId).subscribe({
  //     next:(item:Employee[])=>{this.EmployeeList=item},
  //     error:(err:any)=>{console.log("===>",err)}
  //   });
  // }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [
        
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            localStorage.removeItem('Token');
            this.NavCtrl.navigateRoot('/');

          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}


