import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from 'src/app/component/home/home.component';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [MatCardModule
  ],
  declarations: [HomeComponent]
})
export class NgMaterialModule {
}
