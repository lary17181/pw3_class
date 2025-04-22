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
  {Id:1, Nome:"Estudar", feito:true},
  {Id:2, Nome:"Dormir", feito:false},
  {Id:3, Nome:"Comer", feito:true},
  {Id:4, Nome:"Tomar banho", feito:false},
  {Id:5, Nome:"Cozinhar", feito:false},
]
mostrar:boolean=false
concluidas:boolean=false

Exibir(){
  this.mostrar=true
}
tarefasConcluidas(){
this.concluidas=true
}
}
