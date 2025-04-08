import { Component, Input, input } from '@angular/core';
import { FrasesComponent } from "../frases/frases.component";
import { BotaoComponent } from "../botao/botao.component";
import { ImagemComponent } from '../imagem/imagem.component';

@Component({
  selector: 'app-biscoito',
  imports: [FrasesComponent, BotaoComponent, ImagemComponent],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {

 ehQuebrado: boolean = false;

 Quebrar() {
  this.ehQuebrado = true;
 }

 Reiniciar(){
  this.ehQuebrado= false;
 }

}
