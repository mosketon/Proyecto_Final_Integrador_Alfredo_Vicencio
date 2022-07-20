import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { especializaciones } from '../model/especializaciones.model';

@Injectable({
  providedIn: 'root'
})
export class EspecializacionesService {
  espeURL = "http://localhost:8080/especializaciones/";
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<especializaciones []>{
    return this.httpClient.get<especializaciones[]>(this.espeURL + 'lista');
  }
  
  public detail (id:number): Observable<especializaciones>{
    return this.httpClient.get<especializaciones>(this.espeURL + `detail/${id}`);
   }
    
  public save(especializaciones: especializaciones): Observable<any>{
    return this.httpClient.post<any>(this.espeURL + 'create', especializaciones);
  }
  
  public update (id:number, especializaciones: especializaciones): Observable<any>{
    return this.httpClient.put <any> (this.espeURL +`update/${id}`, especializaciones );
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.espeURL + `delete/${id}`);
  }
}
