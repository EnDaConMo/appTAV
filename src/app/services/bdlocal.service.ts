import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { Iusers } from '../interface/iusers';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

 
  usuario: Iusers[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private toastController: ToastController) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  guardarUsuario(usuario: string, clave: string) {
    const existe = this.usuario.find(m => m.strUsuario === usuario);
    if (!existe) {
      this.usuario.unshift({
        strUsuario: usuario,
        strClave: clave
      });
      this._storage?.set('usuario', this.usuario);
      
      console.log('Usuario guardado en base local');
    }
  }

  
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent: true,
      color: 'medium',
      position: 'top',
      duration: 2000 
    });
    toast.present();
  }

  async borarBD() {
    await this._storage?.clear();
    this.usuario = [];
    console.log(this.usuario.length);
  }
}