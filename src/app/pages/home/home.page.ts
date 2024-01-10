import { Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, Animation, AnimationController, IonCard } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {
    this.activatedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.["user"];
        
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

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

  @ViewChildren(IonCard, { read: ElementRef }) cardElements: QueryList<ElementRef<HTMLIonCardElement>>;

  public animation: Animation;

  ngAfterViewInit() {

    this.animation = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(0)!.nativeElement)
      .duration(1000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0, transform: 'scale(1) rotate(360deg)' },
        { offset: 1, transform: 'scale(1) rotate(0) ' },
      ]);
  }

  rotar() {
    this.animation.play();
  }

  parar() {
    this.animation.stop();
  }




}
