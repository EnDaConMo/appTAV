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

/*
  27BEC1BA5B3BC13A663122E33B7C8D461E5F466BDE73E3624B9204A9DF8905CA6730BBADB06FA9F0CEE4B349CA84ECED
  */
}
