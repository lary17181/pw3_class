import { ImagemComponent } from './../imagem/imagem.component';
import { FrasesComponent } from './../frases/frases.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {

@Input() label:string ="";
@Input() primary:boolean =true;
@Output() clicked = new EventEmitter();
@Input() disabled = false;

onClick() {
  this.clicked.emit();
}


}

