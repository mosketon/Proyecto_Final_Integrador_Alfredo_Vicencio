import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
perURL = 'https://fyrwqjdikn.us16.qoddiapp.com/personas/';

    constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<persona []>{
    return this.httpClient.get<persona[]>(this.perURL + 'lista');
  }
  
  public detail (id:number): Observable<persona>{
    return this.httpClient.get<persona>(this.perURL + `detail/${id}`);
   }
    
  public save(persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.perURL + 'create', persona);
  }
  
  public update (id:number, persona: persona): Observable<any>{
    return this.httpClient.put <any> (this.perURL +`update/${id}`, persona );
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.perURL + `delete/${id}`);
  }

    
}
