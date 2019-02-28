import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl:'./videojuegos.component.html'
})

export class VideojuegosComponent {
    nombre = 'Videojuegos 2018';
    mejor_juego = 'GTAV';
    mejor_juego_retro = 'Super mario 64';
    mostrar_retro = false;
    color = this.mostrar_retro? "red" : "yellow";

    videojuegos = [
        'los simpson hit and rin',
        'assins creed',
        'Dragon ball Z',
        'Teken Tag',
        'Naruto Duo'
    ]
}