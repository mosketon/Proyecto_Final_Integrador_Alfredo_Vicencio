import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { especializaciones } from 'src/app/model/especializaciones.model';
import { EspecializacionesService } from 'src/app/services/especializaciones.service';

@Component({
  selector: 'app-edit-especializaciones',
  templateUrl: './edit-especializaciones.component.html',
  styleUrls: ['./edit-especializaciones.component.css']
})
export class EditEspecializacionesComponent implements OnInit {
  espe: especializaciones = null;

  constructor(private especializacioneService: EspecializacionesService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.especializacioneService.detail(id).subscribe(
      data => {
        this.espe = data;
      }, err => {
        alert("Error al modificar especializacion");
        this.router.navigate(['body']);
      }

    )
  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.especializacioneService.update(id, this.espe).subscribe(
      data => {
        this.router.navigate(['body']);
      }, err => {
        alert("Error al modificar especializacion");
        this.router.navigate(['body']);
      }

    )
  }

}
