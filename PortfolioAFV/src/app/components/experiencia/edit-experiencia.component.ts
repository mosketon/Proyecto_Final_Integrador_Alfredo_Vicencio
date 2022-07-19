import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expe: experiencia = null;

  constructor(private experienciaService: ExperienciaService, private activateRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id =this.activateRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data =>{
        this.expe = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['body']);
      }
      
    )
  }
onUpdate():void{
  const id = this.activateRouter.snapshot.params['id'];
  this.experienciaService.update(id, this.expe).subscribe(
    data =>{
      this.router.navigate(['body']);
    }, err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['body']);
    }
    
  )
}
}
