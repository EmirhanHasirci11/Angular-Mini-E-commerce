import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ValidDirective } from './directives/valid.directive';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    ValidDirective,
    FormsModule
  ],
  exports:[
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
    ValidDirective,
    FormsModule
  ]
})
export class SharedModule { }
