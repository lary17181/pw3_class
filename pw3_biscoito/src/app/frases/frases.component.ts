import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  foto: boolean = true;

  frases: string[] = [
    "Acredite em você mesmo e tudo será possível.",
    "O sucesso vem para aqueles que persistem.",
    "A vida é feita de desafios, supere-os!",
    "Seu futuro depende do que você faz hoje.",
    "A sorte favorece os corajosos.",
    "Grandes sonhos exigem grandes esforços.",
    "A paciência é a chave para muitas portas.",
    "O otimismo é o ímã da felicidade.",
    "Faça o que ama e nunca mais precisará trabalhar.",
    "A jornada é tão importante quanto o destino."
  ];

 @Input() visible: boolean = false;
 gerarFrase(){
  let indice = Math.floor(Math.random() * this.frases.length);
  return this.frases[indice];
 }
  }
