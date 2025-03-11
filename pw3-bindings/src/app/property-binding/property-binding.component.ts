import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  title = 'hello world';
  foto = 'favicon.ico';
  exibirTexto:boolean=false;

somar(n1:number, n2:number):number{
  return n1+n2;}
}
