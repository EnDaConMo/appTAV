import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Iejemplo } from '../interface/iejemplo';
import { ToastController } from '@ionic/angular';
import { Iusers } from '../interface/iusers';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

  /*
  ejemplo: Iejemplo[] = [];
  */
  usuario: Iusers[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private toastController: ToastController) {
    this.init();
    /*
    this.cargarContactos();
    */
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
      /*this.presentToast('Usuario guardado');*/
      console.log('Usuario guardado en base local');
    }
  }

  /*
  async cargarContactos() {
    const miEjemplo = await this.storage.get('ejemplo');
    if (miEjemplo) {
      this.ejemplo = miEjemplo;
    }
  }

  guardarContacto(nombre: string, numero: number) {
    const existe = this.ejemplo.find(m => m.intNumero === numero);
    if (!existe) {
      this.ejemplo.unshift({
        strNombre: nombre,
        intNumero: numero
      });
      this._storage?.set('ejemplo', this.ejemplo);
      this.presentToast('Contacto guardado');
    }else{
      this.presentToast('El numero ya existe');
    }
  }
  */
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
    /*
    this.presentToast('Base de datos borrada');
    */
  }
}