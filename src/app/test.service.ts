import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
//import * as JWT from 'angular-jwt';


@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = { headers: this.headers };

  obj: any[];

  getJSON(): void {

    this.http.get('./assets/');//incomplete


  }

  postFunc(obj): Observable<any> {
    return this.http.post("http://localhost:3000/users", JSON.stringify(obj), this.options);
  }

  sendVal(obj) {
    this.postFunc(obj).subscribe(res => {
      console.log(res);
      //  console.log(this.jwt.decode);
    }, err => this.error(err, 'login'))
  }
  error(err: any, from: string) {
    if (err.status === 504) {
      console.log(err.statusText, 'OK', { duration: 2000 });
      return;
    }
  }

}
