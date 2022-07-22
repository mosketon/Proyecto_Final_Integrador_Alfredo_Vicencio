import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  nombrePro: string ='';
descripcionPro: string='';
fotoPro: string='';

  constructor(private proyectosService: ProyectosService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const pro = new proyectos (this.nombrePro, this.descripcionPro, this.fotoPro);
    this.proyectosService.save(pro).subscribe(data =>{
      alert("Proyecto añadido");
      this.router.navigate(['body']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }


}
