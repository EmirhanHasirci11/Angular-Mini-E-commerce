import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template:`<router-outlet></router-outlet>`,
  standalone:true,
  imports:[RouterModule]
})
export class AppComponent {
  
}
