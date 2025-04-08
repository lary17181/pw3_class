import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
    @Input() quebrado :boolean = true;

    biscoito1 : string = 'biscoito.png';
    biscoito2 : string = 'biscoito-aberto.png';



}
