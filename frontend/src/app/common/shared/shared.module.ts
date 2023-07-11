import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  exports:[
    CommonModule,
    RouterModule,
    BrowserModule
  ]
})
export class SharedModule { }
