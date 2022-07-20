import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEdu: string = '';
  descripcionEdu: string = '';
  fotoEdu: string = '';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new educacion(this.nombreEdu, this.descripcionEdu, this.fotoEdu);
    this.educacionService.save(edu).subscribe(data => {
      alert("Educacion añadida");
      this.router.navigate(['body']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}


