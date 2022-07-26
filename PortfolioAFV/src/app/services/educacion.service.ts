import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  eduURL = "https://backend-alfredo-vicencio.herokuapp.com/educacion/";
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<educacion []>{
    return this.httpClient.get<educacion[]>(this.eduURL + 'lista');
  }
  
  public detail (id:number): Observable<educacion>{
    return this.httpClient.get<educacion>(this.eduURL + `detail/${id}`);
   }
    
  public save(educacion: educacion): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'create', educacion);
  }
  
  public update (id:number, educacion: educacion): Observable<any>{
    return this.httpClient.put <any> (this.eduURL +`update/${id}`, educacion );
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}
