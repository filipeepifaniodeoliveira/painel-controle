import { JwtResponseI } from './../interfaces/jwt-response';
import { UserI } from './../interfaces/user';
import { HttpClientModule, HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, mapTo } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenInterceptor } from '../token.interceptor';

@Injectable()
export class AuthService {

  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;
  public requestModel: HttpRequest<any>;
  constructor(
    private httpClient: HttpClient
  ) { }

  register(user : UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`, user)
      .pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            this.storeTokens(res.dataUser);
          }
        }
      ))
  }

  login (user : UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`, user)
      .pipe(
        tap((res: JwtResponseI) => {
          if (res) {
            this.storeTokens(res.dataUser);
          }
        },
        mapTo(true),
      ))
  }

  logout(): void {
    this.token = '';
    this.removeTokens();
  }

  private storeTokens(data) {
    localStorage.setItem('dataLocal', JSON.stringify({
      token: data.accessToken,
      id: data.id,
      name: data.name,
      expires: data.expiresIn
    }));
    this.token = data.token;
  }

  getJwtToken():string {
    let data: any = {};
    if (!this.token) {
      data = JSON.parse(localStorage.getItem("dataLocal"));
      if (data) {
        this.token = data.accessToken;
        this.addToken(this.requestModel, data.accessToken)
      }
    }
    return this.token;
  }

  removeTokens() {
    localStorage.clear();
    localStorage.removeItem("dataLocal");
  }

  refreshToken() {
    // return this.http.post<any>(`${config.apiUrl}/refresh`, {
    //   'refreshToken': this.getRefreshToken()
    // }).pipe(tap((tokens: Tokens) => {
    //   this.storeJwtToken(tokens.jwt);
    // }));
  }

  saveRequest(request) {
    this.requestModel = request;
  }

  addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
        setHeaders: {
            'Authorization': `Bearer ${token}`
        }
    });
}



}
