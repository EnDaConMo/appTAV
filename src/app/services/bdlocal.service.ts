import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { Iusers } from '../interface/iusers';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

  usuarios: Iusers[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private toastController: ToastController) {
    this.init();
    this.cargarUsuarios();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  guardarUsuario(usuario: string, clave: string, email: string) {
    const existe = this.usuarios.find(m => m.strUsuario === usuario);
    if (!existe) {
      this.usuarios.unshift({
        strUsuario: usuario,
        strClave: clave,
        strEmail: email
      });
      this._storage?.set('usuario', this.usuarios);
      console.log('Usuario guardado en base local');
    }
  }

  validarEmail(email: string) {
    const existeE = this.usuarios.find(m => m.strEmail === email)
    if (existeE) {
      return true;
    }
    return false;
  }

  validarUsuario(usuario: string, clave: string) {
    const existeU = this.usuarios.find(m => m.strUsuario === usuario)
    const existeC = this.usuarios.find(m => m.strClave === clave)
    if (existeU || existeC) {
      return true;
    }
    return false;
  }

  async cargarUsuarios() {
    const usuarios = await this.storage.get('usuario');
    if (usuarios) {
      this.usuarios = usuarios;
    }
  }

  eliminarUsuario(usuario: string) {
    this.usuarios.shift();
    this._storage?.set('usuario', this.usuarios);
    console.log('Usuario eliminado de base local');
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
    this.usuarios = [];
    console.log(this.usuarios.length);
  }
}