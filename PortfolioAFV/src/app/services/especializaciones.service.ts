import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { especializaciones } from '../model/especializaciones.model';

@Injectable({
  providedIn: 'root'
})
export class EspecializacionesService {
URL = "http://localhost:8080";
  constructor(private http: HttpClient) { }
  public getEspecializaciones(): Observable<especializaciones>{
    return this.http.get<especializaciones>(this.URL+'ver/especializaciones')
  }
}
