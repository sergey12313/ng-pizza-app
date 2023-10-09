import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'environments/environment';
import {Observable} from 'rxjs';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {ProductsType} from '../types/products.type';
import {ProductsResponseType} from '../types/productsResponse.type';
import {ProductResponseType} from '../types/productResponse.type';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProducts(searchTerm: string): Observable<ProductsType> {
    let params = new HttpParams();
    if (searchTerm !== '') {
      params = params.append('name', searchTerm);
    }
    return this.http.get<ProductsResponseType>(
      environment.apiUrl + 'products',
      {params}
    );
  }
  getProductById(id: string): Observable<ProductInterface> {
    return this.http.get<ProductResponseType>(
      environment.apiUrl + 'products/' + id
    );
  }
}
