import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorComponent],
  template: `<app-calculator></app-calculator>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
