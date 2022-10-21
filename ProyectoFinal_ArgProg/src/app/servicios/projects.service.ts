import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url= environment.url + 'proyectos/';

  constructor(private httpClient : HttpClient)  { }

  public lista(): Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Projects>{
    return this.httpClient.get<Projects>(this.url + `detail/${id}`);
  }

  public save(proy: Projects): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', proy);
  }

  public update(id: number, proy: Projects): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, proy);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
