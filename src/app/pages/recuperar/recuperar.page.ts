import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  user={
    email:"",
  }

  field:string;
  constructor(public toastController:ToastController, public router:Router) { }

  ngOnInit() {
  }

  recuperar(){
    console.log(this.user);
    if(this.validateModel(this.user)){
      this.presentToast('middle', 'Contrseña recuperada', 2000);
      let navigationExtras: NavigationExtras = {
        state:{
          user: this.user //se asgina email
        }
      }
      this.router.navigate(['/login'], navigationExtras);
    }else{ 
      this.presentToast('middle', 'El campo '+this.field+' es requerido', 3000);
    }
  }

  volver(){
    this.router.navigate(['/login']);
  }

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
