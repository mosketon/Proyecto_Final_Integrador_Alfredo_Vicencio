import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {

  pro: proyectos = null;

  constructor(private proyectosService: ProyectosService, private activateRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id =this.activateRouter.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe(
      data =>{
        this.pro = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['body']);
      }
      
    )
  }
onUpdate():void{
  const id = this.activateRouter.snapshot.params['id'];
  this.proyectosService.update(id, this.pro).subscribe(
    data =>{
      this.router.navigate(['body']);
    }, err =>{
      alert("Error al modificar proyecto");
      this.router.navigate(['body']);
    }
    
  )
}

}
