import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'environments/environment';
import {Observable} from 'rxjs';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {ProductsType} from '../types/products.type';
import {ProductsResponseType} from '../types/productsResponse.type';
import {ProductResponseType} from '../types/productResponse.type';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProducts(searchTerm?: string): Observable<ProductsType> {
    return this.http.get<ProductsResponseType>(environment.apiUrl + 'products');
  }
  getProductById(id: string): Observable<ProductInterface> {
    return this.http.get<ProductResponseType>(
      environment.apiUrl + 'products/' + id
    );
  }
}
