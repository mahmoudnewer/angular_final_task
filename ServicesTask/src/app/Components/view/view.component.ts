import { ProductService } from './../../Services/product.service';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsList } from 'src/app/Models/ProductsList';
import { IProducts } from 'src/app/Models/iproducts';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  productId : any  ;
  product : any;

  constructor(private activeRoute : ActivatedRoute , private productService : ProductService) 
  {

  }
  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.paramMap.get('id');
    this.productService.GetProductById(this.productId).subscribe({
      next : (res) => {this.product = res;}
    });
  }


}
