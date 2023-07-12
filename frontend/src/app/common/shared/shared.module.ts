import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ValidDirective } from './directives/valid.directive';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BlankComponent } from '../components/blank/blank.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    ValidDirective,
    BlankComponent,
    FormsModule
  ],
  exports:[
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
    ValidDirective,
    BlankComponent,
    FormsModule
  ]
})
export class SharedModule { }
