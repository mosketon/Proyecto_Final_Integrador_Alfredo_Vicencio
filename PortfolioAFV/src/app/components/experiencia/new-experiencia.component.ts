import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
nombreEx: string ='';
descripcionEx: string='';
fotoEx: string='';

  constructor(private experienciaService: ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe= new experiencia (this.nombreEx, this.descripcionEx, this.fotoEx);
    this.experienciaService.save(expe).subscribe(data =>{
      alert("Experiencia añadida");
      this.router.navigate(['body']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
