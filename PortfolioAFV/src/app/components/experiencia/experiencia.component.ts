import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: experiencia[] = [];

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se puede borrar la experiencia");
        }


      )

    }

  }

}
