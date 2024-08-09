import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { CarBrands, FuelTypes } from '../../../helpers/data';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})
export class AddCarComponent implements OnInit {

  public isSubmitted: boolean = false;
  public addCarForm!: FormGroup;

  public carMakes: any[] = CarBrands;
  public selectedCardMake!: any;

  public selectedCardModel!: any;

  public fuels: any[] = FuelTypes;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.addCarForm = this.formBuilder.group({
      id: null,
      customerName: [null, [Validators.required]],
      phone: [null, Validators.required],
      imageUrls: [[]],
      mileage: [null, [Validators.required]],
      make: [null, [Validators.required]],
      model: [null, [Validators.required]],
      type: [null, [Validators.required]],
      drive: [null, [Validators.required]],
      fuel: [null, [Validators.required]],
      transmission: [true, [Validators.required]],
      desc: [null],
    });
  }

  public selectCarMake(car: any) {
    this.selectedCardMake = car;
  }

  public selectCarModel(model: any) {
    this.selectedCardModel = model;
  }

  public changeTransmission(type: boolean) {
    this.addCarForm.get('transmission')?.patchValue(type);
  }

  public createCar() {
    this.isSubmitted = true;
    if(this.addCarForm.valid) {
      this.isSubmitted = false;
      console.log(this.addCarForm.value);
    }
  }
}
