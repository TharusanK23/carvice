import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CarWorksComponent } from './car-works/car-works.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-car', pathMatch: 'full' },
  { path: 'add-car', component: AddCarComponent },
  { path: 'car-work', component: CarWorksComponent },
  { path: 'car-progress', component: ProgressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
