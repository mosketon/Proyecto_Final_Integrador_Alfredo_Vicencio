import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-especializaciones',
  templateUrl: './especializaciones.component.html',
  styleUrls: ['./especializaciones.component.css']
})
export class EspecializacionesComponent implements OnInit {
especializacionesList: any
  constructor(private datosportfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosportfolio.obtenerDatos().subscribe (data=>{
      this.especializacionesList=data.especializaciones;
    })
  }

}
