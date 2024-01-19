import { Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, Animation, AnimationController, IonCard } from '@ionic/angular';
import { BdlocalService } from 'src/app/services/bdlocal.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any
  usuario: string = "";
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private animationCtrl: 
    AnimationController, public bdlocalservice: BdlocalService) {
    this.activatedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.["user"];
        this.usuario = this.data.usuario;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  @ViewChild(IonContent, { static: false }) content: IonContent;

  toolbarChanged($event: any) {
    let direction = $event.detail.value;
    this.router.navigate(['home/' + direction]);
  }

  logoff() {
    this.bdlocalservice.eliminarUsuario(this.data);
    this.router.navigate(['/login']);
  }


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
