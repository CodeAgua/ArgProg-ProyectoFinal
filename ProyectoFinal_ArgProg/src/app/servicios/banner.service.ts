import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  url ='https://portfolioprmap.herokuapp.com/banner/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Banner>{
    return this.httpClient.get<Banner>(this.url + `detail/${id}`);
  }

  public update(id: number, banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, banner);
  }
}
