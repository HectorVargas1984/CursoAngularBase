import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public deleteHero?: string;

  public heroNames: string[] = [
    'Spiderman',
    'Iron Man',
    'Hulk',
    'Thor',
    'She Hulk',
  ];

  removeLastHeroe(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
