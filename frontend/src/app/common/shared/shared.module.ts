import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ValidDirective } from './directives/valid.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ValidDirective,
    FormsModule
  ],
  exports:[
    CommonModule,
    RouterModule,
    ValidDirective,
    FormsModule
  ]
})
export class SharedModule { }
