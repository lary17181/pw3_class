import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
professores: string[] = ["Rogerio","roberto","Guigas"]

remover(index:number){
  this.professores.splice(index, 1)
}
}
