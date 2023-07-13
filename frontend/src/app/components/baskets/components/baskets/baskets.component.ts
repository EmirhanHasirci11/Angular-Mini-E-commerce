import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { ToastrService } from 'ngx-toastr';
import { SwalService } from 'src/app/common/shared/services/swal.service';
import { BasketModel } from '../../models/basket.model';
import { BasketService } from '../../services/basket.service';
import { OrderService } from 'src/app/components/orders/services/order.service';

@Component({
  selector: 'app-baskets',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {
  baskets: BasketModel[] = [];
  sum: number = 0;
  
  constructor(
    private _basket: BasketService,
    private _toastr: ToastrService,
    private _swal: SwalService,
    private _order: OrderService
  ){}
  
    ngOnInit(): void {
      this.getAll();
    }
  
  getAll(){
    this._basket.getAll(res=> {
      this.baskets = res;
      this.calculate();
    });
  }
  
  calculate(){
    this.sum = 0;
    this.baskets.forEach(element=> {
      this.sum += (element.price * element.quantity)
    });
  }
  
  removeById(_id: string){
    this._swal.callSwal("Do you want to remove this item form basket=","Remove Product","Remove",()=>{
      let model = {_id: _id};
      this._basket.removeById(model, res=> {
        this._toastr.info(res.message);
        this.getAll();
      });
    })  
  }
  createOrder(){
    this._swal.callSwal("Confirm the payment","Confirm","Confirm", ()=> {
      this._order.create(res=> {
        this._toastr.success(res.message);
        this.getAll();
      });
    });
  }
  }