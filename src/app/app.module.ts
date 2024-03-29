import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { ServicerestService } from './services/servicerest.service';
import { AuthGuard } from './guards/auth.guard';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { EmailjsService } from './services/emailjs.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({ rippleEffect: false, mode: 'md'}), AppRoutingModule, IonicStorageModule.forRoot(), HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ServicerestService, AuthGuard, BarcodeScanner, EmailjsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
