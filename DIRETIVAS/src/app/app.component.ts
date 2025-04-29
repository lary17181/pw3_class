import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForComponent } from './for/for.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ForComponent, NgcontentComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DIRETIVAS';
}
