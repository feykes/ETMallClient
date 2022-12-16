import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
//angular uygulamasında http üzerinden yapılacak bütün isteklerin sorumluluğunu bu service üstleniyor
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  //aşağıda httpClientı böyle kullanamak için ana modülde HttpClientModule import edilmeli
  constructor(private httpClient:HttpClient, @Inject("baseUrl") private baseUrl:string) {} //app modulden baseUrl i çekiyorum


  private url(requestParameters: Partial<RequestParameters>) : string {
    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}` : ""}`;
  }

  get<T>(requestParameters:Partial<RequestParameters> , id?: string) : Observable<T>{
    let url:string="";

    if(requestParameters.fullEndPoint){
      url=requestParameters.fullEndPoint;
    }
    else
      url = `${this.url(requestParameters)}${id? `/${id}` : ""}`; //id geldiyse id koy yoksa boş geç

    return this.httpClient.get<T>(url,{headers:requestParameters.headers})
  }

  post<T>(requestParameters:Partial<RequestParameters>, body: Partial<T>) : Observable<T>{
    let url: string="";
    if(requestParameters.fullEndPoint){
      url=requestParameters.fullEndPoint;
    }else{
      url=`${this.url(requestParameters)}`
    }
    return this.httpClient.post<T>(url, body, {headers:requestParameters.headers});
  }

  put<T>(requestParameters:Partial<RequestParameters>, body:Partial<T>) : Observable<T>{
    let url: string="";
    if(requestParameters.fullEndPoint){
      url=requestParameters.fullEndPoint;
    }else{
      url=`${this.url(requestParameters)}`
    }
    return this.httpClient.put<T>(url,body,{headers:requestParameters.headers});
  }

  delete<T>(requestParameters:Partial<RequestParameters>, id: string) : Observable<T>{
    let url: string="";
    if(requestParameters.fullEndPoint){
      url=requestParameters.fullEndPoint;
    }else{
      url=`${this.url(requestParameters)}/${id}`
    }
    return this.httpClient.delete<T>(url, {headers:requestParameters.headers})
  }
}

export class RequestParameters{
  controller?:string;
  action?:string;
  headers?:HttpHeaders;
  baseUrl?:string;
  fullEndPoint?: string;
}
