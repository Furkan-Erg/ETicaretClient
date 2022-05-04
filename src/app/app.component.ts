import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ETicaretClient';
}

$.get('https://localhost:7187/api/products', (data) => {
  console.log(data);
});
