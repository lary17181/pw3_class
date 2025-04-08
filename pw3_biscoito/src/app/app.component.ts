import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrasesComponent } from "./frases/frases.component";
import { ImagemComponent } from "./imagem/imagem.component";
import { BotaoComponent } from "./botao/botao.component";
import { BiscoitoComponent } from "./biscoito/biscoito.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BiscoitoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-biscoito';
}
