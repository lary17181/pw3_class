import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from "./interpolation/interpolation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello world';
  foto = 'favicon.ico';

  exibirTexto:boolean=false;

somar(n1:number, n2:number):number{
  return n1+n2;
}
alertar(){
  alert("hoje esta mtt quente");
  this.exibirTexto=!this.exibirTexto
}
trocarValor(t1:boolean):boolean{
  if(t1 == true){
    t1= false;
  }else{
    t1=true;
  }
  return t1
}

}

