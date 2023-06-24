import { Component } from '@angular/core';
import { productsList } from 'src/app/Models/ProductsList';
import { IProducts } from 'src/app/Models/iproducts';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  
  products : IProducts [] = productsList;

  myImg : string ="5.jpg";
  allImgs : string [] = ['5.jpg','6.jpg','7.jpg'];
  cnt : number = 1;
show()
{
    this.myImg = this.allImgs[this.cnt];
    this.cnt++;
    if(this.cnt>=3)
    {
        this.cnt=0;
    }
}
}
