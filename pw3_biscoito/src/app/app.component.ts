import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrasesComponent } from "./frases/frases.component";
import { ImagemComponent } from "./imagem/imagem.component";
import { BotaoComponent } from "./botao/botao.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FrasesComponent, ImagemComponent, BotaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-biscoito';
}
