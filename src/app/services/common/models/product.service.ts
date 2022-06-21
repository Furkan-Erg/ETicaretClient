import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) {}

  create(product: Product, successCallBack?: any, errorCallback?: any) {
    this.httpClientService.post({ controller: 'products' }, product).subscribe(
      (result) => {
        successCallBack();
      },
      (errorResponse: HttpErrorResponse) => {
        const _error: Array<{ key: string; value: Array<string> }> =
          errorResponse.error; // bu şekilde biz httperrorrespontan yararlanabliriyoruz ve .error sayesinde bütün error detayı geliyor
        let message = '';
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += '${_v}<br>';
          });
        });
        errorCallback(message);
      }
    );
  }
}
