import { Component } from '@angular/core';
import { ServicesSigninService } from '../services/services-signin.service';
import { signin } from '../model/sign-in';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage  {
  password:string='';
  usuario:string='';
  signin:signin[]=[]
  userLogin?:signin;
data : any[]=[];
  public forma = new FormGroup({
    username : new FormControl ('', [Validators.required]), 
    password :new FormControl   ('', [Validators.required])
  })
 
  constructor(private serviceslogin: ServicesSigninService, private  navCtrl : NavController ) { }

  onForgotPassword(){

  }

  async onLogin(){
    try {

      if (this.forma.valid) {

        this.userLogin=this.forma.value as signin;
        console.log('=====?',this.userLogin)
        // this.serviceslogin.postgeneratetoken()
      }
      
      this.serviceslogin.postgeneratetoken(this.forma.value).subscribe(data =>{
       this.data = data.accessToken
       console.log(this.data);
      localStorage.setItem('Token',JSON.stringify( this.data))
  


        this.navCtrl.navigateRoot("/departamento")
     alert('Informaciones correctas')
    }, error =>{
      alert('No hemos podido ingresar con las informaciones suministradas, validar que las mismas sean correctas')
    })
  } catch (error) {
    console.log(error)
  }
  }
}
