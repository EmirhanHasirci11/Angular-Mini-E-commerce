import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule,NgxSpinnerModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private _toastr:ToastrService,
    private _spinner:NgxSpinnerService
    ){
      this._spinner.show();
      setTimeout(() => {
      this._spinner.hide();
      }, 5000);
    
  }
login(form:NgForm){
  if(form.valid){
    console.log(form.value);
    
  }
}
}
