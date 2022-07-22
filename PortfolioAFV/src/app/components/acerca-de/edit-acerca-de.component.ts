import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  perso: persona = null;

  constructor(private PersonaService: PersonaService, private activateRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id =this.activateRouter.snapshot.params['id'];
    this.PersonaService.detail(id).subscribe(
      data =>{
        this.perso = data;
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['body']);
      }
      
    )
  }
onUpdate():void{
  const id = this.activateRouter.snapshot.params['id'];
  this.PersonaService.update(id, this.perso).subscribe(
    data =>{
      this.router.navigate(['body']);
    }, err =>{
      alert("Error al modificar persona");
      this.router.navigate(['body']);
    }
    
  )
}

}
