import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {

  habi: habilidades = null;

  constructor(private habilidadesService: HabilidadesService, private activateRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id =this.activateRouter.snapshot.params['id'];
    this.habilidadesService.detail(id).subscribe(
      data =>{
        this.habi = data;
      }, err =>{
        alert("Error al modificar habilidad");
        this.router.navigate(['body']);
      }
      
    )
  }
onUpdate():void{
  const id = this.activateRouter.snapshot.params['id'];
  this.habilidadesService.update(id, this.habi).subscribe(
    data =>{
      this.router.navigate(['body']);
    }, err =>{
      alert("Error al modificar habilidad");
      this.router.navigate(['body']);
    }
    
  )
}

}
