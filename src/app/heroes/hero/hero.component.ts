import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public alias: string = 'Iron Man';
  public nombre: string = 'Tony Stark';
  public edad: number = 45;

  get capitalizate(): string {
    return this.alias.toUpperCase();
  }

  getHeroeDescripcion(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  setCambiarNombre(): void {
    this.nombre = 'Peter Parker';
    this.alias = 'Spiderman';
  }

  setCambiarEdad(): void {
    this.edad = 19;
  }

  resetiarInformacion(): void {
    this.alias = 'Iron Man';
    this.nombre = 'Tony Stark';
    this.edad = 45;
  }
}
