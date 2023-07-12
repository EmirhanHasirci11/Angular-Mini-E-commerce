import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModel } from './models/category.module';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NgForm } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[] = [];
  constructor(
    private _toastr: ToastrService,
    private _category: CategoryService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._category.getAll(res => this.categories = res);
  }

  add(form: NgForm) {
    if (form.valid) {
      this._category.add(form.controls["name"].value, res => {
        this._toastr.success(res.message);
        let element = document.getElementById("addModalCloseBtn");
        element?.click();
        form.reset();
        this.getAll();
      });
    }
  }
}
