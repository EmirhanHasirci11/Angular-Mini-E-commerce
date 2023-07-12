import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { importProvidersFrom } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { provideHttpClient } from "@angular/common/http"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppComponent } from "./app/app.component";
import { routes } from "./app/router";
import { ToastrModule } from "ngx-toastr";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
      ToastrModule.forRoot({
        closeButton:true,
        progressBar:true
      })
      )
  ]

})