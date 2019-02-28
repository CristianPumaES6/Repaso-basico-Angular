import { Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  template: `
    <h2> Componente de {{nombre}} </h2>
    <h3> El mejor juego es : {{mejor_juego}}</h3>
  `
})

export class VideojuegosComponent {
  nombre = 'Videojuegos 2018';
  mejor_juego = 'GTAV';
}