import { Component } from '@angular/core';
import { Cars } from '../../../helpers/data';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  public cars: any[] = Cars;
  public selectedCar: any = Cars[0];

  public selecteCar(car: any) {
    this.selectedCar = car;
  }
}
