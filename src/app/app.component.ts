import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, UpperCasePipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_chat';

  novoItem: string = '';

  lista: string[] = [];

  adicionaItem() {
    this.lista.push(this.novoItem);
    this.novoItem = '';
  }

  removeItem(item: string) {
    this.lista = this.lista.filter((i) => i !== item);
  }
}