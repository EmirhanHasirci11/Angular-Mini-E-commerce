import { UserModel } from "./user.module";

export class LoginResponseModel{
    token:string="";
    user:UserModel=new UserModel();
}