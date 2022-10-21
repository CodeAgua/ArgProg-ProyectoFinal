import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
    url= environment.url + 'personas/';

    constructor(private http: HttpClient) { }

    public lista(): Observable<persona[]>{
      return this.http.get<persona[]>(this.url + 'lista');
    }
  
    public detail(id: number): Observable<persona>{
      return this.http.get<persona>(this.url + `detail/${id}`);
    }
  
    public update(id: number, Persona: persona): Observable<any>{
      return this.http.put<any>(this.url + `update/${id}`, Persona);
    }
  }
  