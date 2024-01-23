import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, Animation, AnimationController, IonCard } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component  implements OnInit {

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {}


  cerrarModal(){
    this.modalController.dismiss(); 
  }

  recuperarContraseña(){
    this.modalController.dismiss();
    this.router.navigate(['/login']);
  }

}
