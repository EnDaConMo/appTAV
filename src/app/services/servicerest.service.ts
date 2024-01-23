import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicerestService {

  URL: string = 'https://nancyb3a.github.io/Test_/usuarios_PGY4121.json'

  httpHeader = {
    headers: new HttpHeaders({ 'Content Type': 'application/json', 'Access-Control-Allow-Origin' : '*'}),
  };

  constructor(private http: HttpClient) { }

}
