import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  habiURL = "http://localhost:8080/habilidades/";
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<habilidades []>{
    return this.httpClient.get<habilidades[]>(this.habiURL + 'lista');
  }
  
  public detail (id:number): Observable<habilidades>{
    return this.httpClient.get<habilidades>(this.habiURL + `detail/${id}`);
   }
    
  public save(habilidades: habilidades): Observable<any>{
    return this.httpClient.post<any>(this.habiURL + 'create', habilidades);
  }
  
  public update (id:number, habilidades: habilidades): Observable<any>{
    return this.httpClient.put <any> (this.habiURL +`update/${id}`, habilidades );
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.habiURL + `delete/${id}`);
  }
}
