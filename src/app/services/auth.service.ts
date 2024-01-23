import { Injectable } from '@angular/core';
import { BdlocalService } from './bdlocal.service';
import { Iusers } from '../interface/iusers';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarios: Iusers[] = [];

  constructor(public BdlocalService: BdlocalService) { }
/*
  private estaLogeado: boolean = false;


  logeado(){
    return this.estaLogeado;
  }
  
  */
}
