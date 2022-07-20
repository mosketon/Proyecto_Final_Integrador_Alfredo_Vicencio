import { Component, OnInit } from '@angular/core';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habi: habilidades[] = [];

  constructor(private habilidadesService: HabilidadesService, private tokenService: TokenService) { }

  isLogged = false
  ngOnInit(): void {
    this.cargarHabilidades();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarHabilidades(): void {
    this.habilidadesService.lista().subscribe(data => { this.habi = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.habilidadesService.delete(id).subscribe(
        data => {
          this.cargarHabilidades();
        }, err => {
          alert("No se puede borrar la habilidad");
        }


      )

    }

  }

}
