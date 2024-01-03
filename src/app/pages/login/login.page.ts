import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user={
    usuario:"",
    clave:""
  }

  field:string;
  constructor(public toastController:ToastController, public router:Router) { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.user);
    if(this.validateModel(this.user)){
      this.presentToast('top', 'Bienvenido ' +this.user.usuario, 2000);
      let navigationExtras: NavigationExtras = {
        state:{
          user: this.user //se asgina usuario y contrseña
        }
      }
      this.router.navigate(['/home'], navigationExtras);
    }else{ 
      this.presentToast('middle', 'El campo '+this.field+' es requerido', 3000);
    }
  }

 /*
 Validar usuario y contraseña  
 */

 validateModel(model: any) {
    for(var [key, value] of Object.entries(model)){
      if(value == ""){
        this.field = key;
        return false;
      }
    }
    return true;
 }

  async presentToast(position : 'top' | 'bottom' | 'middle', message: string, duration?: number) {
    const toast = await this.toastController.create({
      message : message,
      duration : duration?duration:2000,
      position : position,
    });
    await toast.present();
  }
}