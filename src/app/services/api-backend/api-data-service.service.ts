import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  baseUrl: string =''

  constructor(private http: HttpClient) {
      this.baseUrl = 'http://127.0.0.1:8000/'
  }

  get(path: string, queryParams: string): Observable<any>{
    let fullUrl = this.baseUrl;
    fullUrl = path.length > 0? fullUrl+path : fullUrl
    fullUrl = queryParams.length > 0? fullUrl+queryParams : fullUrl
    console.log(fullUrl)
    return this.http.get<any>(fullUrl, this.httpOptions).pipe(map((res: any)=>{
      return res;
    }))

  }

  post(path: string, data: any): Observable<any>{
    let fullUrl = this.baseUrl;
    fullUrl = path.length > 0? fullUrl+path : fullUrl
    return this.http.post<any>(fullUrl, data, this.httpOptions).pipe(map((res: any) => res))
  }

  put(path: string, data: any): Observable<any>{
    let fullUrl = this.baseUrl;
    fullUrl = path.length > 0? fullUrl+path : fullUrl
    return this.http.put<any>(fullUrl, data, this.httpOptions).pipe(map((res: any) => res))
  }

  delete(){}
}
