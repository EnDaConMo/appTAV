import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, Animation, AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component  implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {}

  @ViewChild(IonContent, { static: false }) content: IonContent;

  scrollTop() {
    this.content.scrollToTop(500);
  }

  logoff() {
    this.router.navigate(['/login']);
  }

  public alertButtons = [
    {
      text: 'Si',
      cssClass: 'alertaSi',
      handler: () => {
        this.logoff();
      }
    },
    {
      text: 'No',
      cssClass: 'alertaNo',
      handler: () => {
        console.log('No');
      }
    }
  ]

}
