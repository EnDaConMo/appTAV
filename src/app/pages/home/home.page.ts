import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any
  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
    this.activatedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.["user"];
        console.log(this.data);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  @ViewChild(IonContent, {static:false}) content: IonContent;

  scrollTop(){
    this.content.scrollToTop(500);
  }

  logoff() {
    this.router.navigate(['/login']);
  }

  public alertButtons = [
    {
      text: 'Si',
      cssClass: 'alertaSi',
      handler: () =>{
        this.logoff();
      }
    },
    {
      text:'No',
      cssClass: 'alertaNo',
      handler: () =>{
        console.log('No');
      }
    }
  ]
}
