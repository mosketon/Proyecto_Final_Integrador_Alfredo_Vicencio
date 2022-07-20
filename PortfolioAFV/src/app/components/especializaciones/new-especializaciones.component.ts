import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { especializaciones } from 'src/app/model/especializaciones.model';
import { EspecializacionesService } from 'src/app/services/especializaciones.service';

@Component({
  selector: 'app-new-especializaciones',
  templateUrl: './new-especializaciones.component.html',
  styleUrls: ['./new-especializaciones.component.css']
})
export class NewEspecializacionesComponent implements OnInit {

  nombreEspe: string = '';
  descripcionEspe: string = '';
  fotoEspe: string = '';

  constructor(private especializacionesService: EspecializacionesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const espe = new especializaciones(this.nombreEspe, this.descripcionEspe, this.fotoEspe);
    this.especializacionesService.save(espe).subscribe(data => {
      alert("Especializacion añadida");
      this.router.navigate(['body']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }


}
