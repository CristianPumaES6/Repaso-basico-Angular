import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2> Componente de {{nombre}} </h2>
  `
})

export class VideojuegosComponent {
  nombre = 'Videojuegos 2018'
}