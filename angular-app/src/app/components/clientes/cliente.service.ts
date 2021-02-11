import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cliente } from './cliente';
import { CLIENTES } from "./clientes.json";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});
  private urlEndPoint = "http://localhost:8080/clientes/cliente";
  constructor(private http: HttpClient) { }
  
  //observado
  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map (Response => Response as Cliente[])
    );
  };

  createCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint,cliente,{headers: this.httpHeaders})
  };

  getCliente(id: number): Observable<Cliente>{
    return this.http.get(this.urlEndPoint+'/'+ id).pipe(
      map (Response => Response as Cliente)
    )
  } 

};
