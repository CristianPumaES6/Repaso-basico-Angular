import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent {
    nombre: string;
    mejor_juego: string;
    mejor_juego_retro: string;
    mostrar_retro: boolean;
    color: string;
    year: number;
    videojuegos: Array<string>;

    constructor() {
        this.nombre = 'Videojuegos 2018';
        this.mejor_juego = 'GTAV';
        this.mejor_juego_retro = 'Super mario 64';
        this.mostrar_retro = true;
        this.year = 2018;
        this.color= this.mostrar_retro ? "red" : "yellow";
        this.videojuegos = [
            'los simpson hit and rin',
            'assins creed',
            'Dragon ball Z',
            'Teken Tag',
            'Naruto Duo'
        ]
    
    }
}