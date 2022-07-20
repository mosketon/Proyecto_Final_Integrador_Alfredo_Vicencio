import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  pro: proyectos[] = [];

  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) { }

  isLogged = false
  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarProyectos(): void {
    this.proyectosService.lista().subscribe(data => { this.pro = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectosService.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se puede borrar el proyecto");
        }


      )

    }

  }

}
