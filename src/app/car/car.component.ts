import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarsModel } from '../models/car.model';

@Component({
  selector: 'pr-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() carModel!: CarsModel;
  @Output() readonly carClicked = new EventEmitter<CarsModel>();

  getCarImageUrl(): string {
    return `assets/car-${this.carModel.color.toLowerCase()}.png`;
  }

  clicked(): void {
    this.carClicked.emit(this.carModel);
  }

}
