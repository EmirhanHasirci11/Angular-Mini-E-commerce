import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ValidDirective } from './directives/valid.directive';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BlankComponent } from '../components/blank/blank.component';
import { TableComponent } from '../components/table/table.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    ValidDirective,
    BlankComponent,
    TableComponent,
    FormsModule
  ],
  exports:[
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
    ValidDirective,
    TableComponent,
    BlankComponent,
    FormsModule
  ]
})
export class SharedModule { }
