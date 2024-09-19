import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token!:string
  constructor(private http: HttpClient) { }

  sendTokenRequest(){
    let jsonRequestBody: any = {username: 'foo', password: 'foo'}
    let url = 'http://localhost:8092/authenticate'
    this.http.post(url, jsonRequestBody, {responseType: 'text' as 'json'})
  }
  sendAuthRequest(){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
    let url = 'http://localhost:8092/authenticate'
    this.http.post(url, {headers, responseType: 'text' as 'json'})
  }
}
