import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  bannerUrl = 'http://localhost:8080/banner/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.bannerUrl + 'lista');
  }

  public detail(id: number): Observable<Banner>{
    return this.httpClient.get<Banner>(this.bannerUrl + `detail/${id}`);
  }

  public update(id: number, banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.bannerUrl + `update/${id}`, banner);
  }
}
