import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesSigninService {

 url = environment.urlProduccion
  token : any  = localStorage.getItem('token');
  constructor(private httpclient : HttpClient) { }

  public getdatalogin<T>(username : string,password : string, query: string ) {
    let url = localStorage.getItem('codigoURL');

    query = `${url}${url}/${query}/${username}/${password}/`
    return this.httpclient.get<T>( query );
  }

   postgeneratetoken(uso : any):Observable<any>{ 
   // let url = localStorage.getItem('codigoURL');
    let apiurl = this.url+'User/authenticate/'
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpclient.post(`${apiurl}`,uso,httpOptions);
  }

}
