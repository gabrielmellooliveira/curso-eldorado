import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { CarsComponent } from './components/cars/cars.component';


@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
