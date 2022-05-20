import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

miPortfolio:any;
persona: persona = new persona ("", "", "","")
  
constructor(public personaService : PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{
      console.log(data);
      this.persona=data;
    });

  }

}
""