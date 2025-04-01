import { ImagemComponent } from './../imagem/imagem.component';
import { FrasesComponent } from './../frases/frases.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {

@Input() texto:string ="botão";
@Input() classe:boolean =true;
@Input() habilitado:boolean=true;


}

