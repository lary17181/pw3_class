import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
tarefas: any[]=
[
  {Id:1, Nome:"Estudar", feito:false},
  {Id:2, Nome:"Dormir", feito:false},
  {Id:3, Nome:"Comer", feito:false},
  {Id:4, Nome:"Tomar banho", feito:false},
  {Id:5, Nome:"Cozinhar", feito:false},
]
mostrar:boolean=false


Exibir(){
  this.mostrar=!this.mostrar;
}
tarefasConcluidas(){
return this.tarefas.filter((a)=>{
  return a.feito;
})
}
}
