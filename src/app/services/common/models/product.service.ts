import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Product } from '../../../contracts/create_product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) {}

  create(product: Product, successCallBack?:any) {
    return this.httpClientService
      .post({ controller: 'products' }, product)
      .subscribe((result) => {
        successCallBack();
      });
  }
}
