import { Injectable } from '@angular/core';
import { GenericHttpService } from 'src/app/common/shared/services/generic-http.service';
import { LoginResponseModel} from '../models/login-response.model';
import { LoginModel } from '../models/login.module';
import { RegisterModel } from '../models/register.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:GenericHttpService) 
  {}
  login(model:LoginModel,callBack:(res:LoginResponseModel)=>void){
   this._http.post<LoginResponseModel>("auth/login",model,res=>callBack(res))   
  }
  register(model:RegisterModel, callBack: (res:LoginResponseModel)=> void){
    this._http.post<LoginResponseModel>("auth/register",model, res=> callBack(res));
  }
}
