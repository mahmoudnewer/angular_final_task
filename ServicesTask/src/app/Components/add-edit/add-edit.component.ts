import { productsList } from 'src/app/Models/ProductsList';
import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Models/iproducts';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  productId: any;
  product: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private PService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.productId = this.activeRoute.snapshot.paramMap.get('id');

    this.activeRoute.params.subscribe((params: Params) => {
      // to track any change in the id

      this.productId = params['id'];
      if (this.productId == 0) {
        this.productsForm.reset();
      } else {
        this.product = this.PService.GetProductById(this.productId).subscribe({
          next: (response) => {
            this.product = response;
            this.getProductName.setValue(this.product.pname);
            this.getProductPrice.setValue(this.product.price);
            this.getProductQuantity.setValue(this.product.quantity);
          },
          error: (error) => {
            console.log(error);
          },
        });
      }
    });
  }
  products: IProducts[] = productsList;

  productsForm = new FormGroup({
    pname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(50)]),
    quantity: new FormControl('', [Validators.required, Validators.max(30)]),
  });

  get getProductName() {
    return this.productsForm.controls.pname; //return this.productsForm.controls['pname']
  }

  get getProductPrice() {
    return this.productsForm.controls.price; //return this.productsForm.controls['price']
  }

  get getProductQuantity() {
    return this.productsForm.controls.quantity; //return this.productsForm.controls['quantity']
  }

  Submit(e: any) {
    e.preventDefault();
    if (this.productsForm.valid) {
      if (this.productId == 0) {
        this.PService.AddProduct(this.productsForm.value).subscribe({
          next: (response) => {
            this.router.navigate(['/products']);
          },
        });
      } else {
        this.PService.UpdateProduct(
          this.productId,
          this.productsForm.value
        ).subscribe({
          next: (res) => {
            this.router.navigate(['/products']);
          },
        });
      }
    } else {
      console.log(this.productsForm.errors);
    }
  }
}
