import { Component, OnInit } from '@angular/core';
import { especializaciones } from 'src/app/model/especializaciones.model';
import { EspecializacionesService } from 'src/app/services/especializaciones.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-especializaciones',
  templateUrl: './especializaciones.component.html',
  styleUrls: ['./especializaciones.component.css']
})
export class EspecializacionesComponent implements OnInit {
  especializacionesList: any
  espe: especializaciones[] = [];

  constructor(private especializacionesService: EspecializacionesService, private tokenService: TokenService) { }

  isLogged = false
  ngOnInit(): void {
    this.cargarEspecializaciones();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarEspecializaciones(): void {
    this.especializacionesService.lista().subscribe(data => { this.espe = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.especializacionesService.delete(id).subscribe(
        data => {
          this.cargarEspecializaciones();
        }, err => {
          alert("No se puede borrar la experiencia");
        } )

    }

  }


}
