import { CadastroI } from './../models/cadastro';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { ICadastro } from '../interfaces/cadastro';
import { CadastroResponseI } from '../interfaces/cadastro-response';

Injectable()
export class CadastroService {

  CAD_SERVER: string = 'http://localhost:3000';
  cadSubject = new BehaviorSubject(false);
  private token: string;
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  cadastro(formulario : ICadastro): Observable<CadastroResponseI> {
    return this.httpClient.post<CadastroResponseI>(`${this.CAD_SERVER}/cadastro`, formulario)
      .pipe(tap(
        (res: CadastroResponseI) => {
          if (res) {
            // this.storeTokens(res.dataUser);
          }
        }
      ))
  }


}