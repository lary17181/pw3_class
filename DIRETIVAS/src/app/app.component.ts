import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForComponent } from './for/for.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DIRETIVAS';
}
