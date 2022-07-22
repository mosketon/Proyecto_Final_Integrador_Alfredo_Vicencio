import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  edu: educacion = null;

  constructor(private educacionService: EducacionService, private activateRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id =this.activateRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data =>{
        this.edu = data;
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['body']);
      }
      
    )
  }
onUpdate():void{
  const id = this.activateRouter.snapshot.params['id'];
  this.educacionService.update(id, this.edu).subscribe(
    data =>{
      this.router.navigate(['body']);
    }, err =>{
      alert("Error al modificar educacion");
      this.router.navigate(['body']);
    }
    
  )
}

}
