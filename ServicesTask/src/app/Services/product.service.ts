import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL : string = "http://localhost:3005/products";

  constructor(private httpClient : HttpClient) 
  { 

  }

  GetAllProducts()
  {
    return this.httpClient.get(this.baseURL);
  }

  GetProductById(id : any)
  {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  AddProduct(product : any)
  {
    return this.httpClient.post(this.baseURL,product);
  }

  
  DeleteProduct(id : number)
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  UpdateProduct(id : number , product : any)
  {
    return this.httpClient.put(`${this.baseURL}/${id}` , product)
  }

}
