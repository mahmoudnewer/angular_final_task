import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { productsList } from 'src/app/Models/ProductsList';
import { IProducts } from 'src/app/Models/iproducts';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  products: any;

  constructor(private pservice: ProductService) {}
  ngOnInit(): void {
    this.pservice.GetAllProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  Remove(id: number) {
    this.products = this.pservice.DeleteProduct(id).subscribe({
      next: (res) => {
        this.pservice.GetAllProducts().subscribe({
          next: (res) => {
            this.products = res;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }
}
