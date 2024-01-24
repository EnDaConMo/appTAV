import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {

  constructor() { 
    emailjs.init("DVP2JU80srnF73aRS");
  }

  sendEmail(templateId: string, params: any): Promise<any> {
    return emailjs.send('service_3v6h1jc', 'template_zytgk38');  
  }
}
