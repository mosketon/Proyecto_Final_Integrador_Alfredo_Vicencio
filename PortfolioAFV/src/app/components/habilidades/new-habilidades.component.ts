import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit {

  nombreHabi: string ='';
  porcentajeHabi: number;
  fotoHabi: string='';
  
    constructor(private habilidadesService: HabilidadesService, private router:Router) { }
  
    ngOnInit(): void {
    }
  
    onCreate(): void{
      const habi= new habilidades (this.nombreHabi, this.porcentajeHabi, this.fotoHabi);
      this.habilidadesService.save(habi).subscribe(data =>{
        alert("Habilidad añadida");
        this.router.navigate(['body']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      })
    }
  

}
