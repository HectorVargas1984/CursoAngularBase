import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
export class CounterComponent {
  public title: string = 'Holas Mundos';
  public parrafo: string = 'Bienvenidos a Angular';

  public counter: number = 10;

  incrementar(): void {
    this.counter += 1;
  }

  decrementar(): void {
    this.counter -= 1;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
