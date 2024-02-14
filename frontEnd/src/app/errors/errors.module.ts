import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnavailableComponent } from './components/unavailable/unavailable.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UnavailableComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UnavailableComponent
  ]
})
export class ErrorsModule { }
