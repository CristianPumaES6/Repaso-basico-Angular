import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    template: `
    <h2> Componente de {{nombre}} </h2>
    
    <h3 [style.background]='color' *ngIf="mostrar_retro != true"> 
        El mejor juego es : {{mejor_juego}}
    </h3>

    <h3 [style.background]='color' *ngIf="mostrar_retro"> 
        El mejor juego es : {{mejor_juego_retro}}
    </h3>
  `
})

export class VideojuegosComponent {
    nombre = 'Videojuegos 2018';
    mejor_juego = 'GTAV';
    mejor_juego_retro = 'Super mario 64';
    mostrar_retro = false;
    color = this.mostrar_retro? "red" : "yellow";
}