import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p404',
  templateUrl: './p404.page.html',
  styleUrls: ['./p404.page.scss'],
})
export class P404Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  
  Volver(){
    this.router.navigate(['/login']);
  }

}
