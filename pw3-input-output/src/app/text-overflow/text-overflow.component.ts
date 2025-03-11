import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {

  @Input() titulo= "o titulo";
  @Input() texto= "o texto longo que será cortado pela folha de estilo";
  @Input() clip:boolean =true;

}
