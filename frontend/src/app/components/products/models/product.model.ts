import { CategoryModel } from "../../categories/models/category.module";

export class ProductModel{
    _id: string = "";
    name: string = "";
    categories: CategoryModel[] = [];
    stock: number = 0;
    price: number = 0;
    isActive: boolean = true;
    createdDate: string = "";
    imageUrls: any[] = [];
}