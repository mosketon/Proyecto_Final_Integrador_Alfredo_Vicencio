import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proURL = "https://fyrwqjdikn.us16.qoddiapp.com/proyectos/";
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<proyectos []>{
    return this.httpClient.get<proyectos[]>(this.proURL + 'lista');
  }
  
  public detail (id:number): Observable<proyectos>{
    return this.httpClient.get<proyectos>(this.proURL + `detail/${id}`);
   }
    
  public save(proyectos: proyectos): Observable<any>{
    return this.httpClient.post<any>(this.proURL + 'create', proyectos);
  }
  
  public update (id:number, proyectos: proyectos): Observable<any>{
    return this.httpClient.put <any> (this.proURL +`update/${id}`, proyectos );
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proURL + `delete/${id}`);
  }
}
