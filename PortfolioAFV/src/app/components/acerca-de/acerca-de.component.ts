import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  perso: persona[] = [];

  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false
  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarPersona(): void {
    this.personaService.lista().subscribe(data => { this.perso = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.personaService.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se puede borrar la persona");
        }


      )

    }

  }

}