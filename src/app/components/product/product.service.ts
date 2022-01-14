/* import { Product } from './../product-texas/product.model'; */

import { product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; //mensagens toast.
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product-texas/product.model';

//sempre que eu injetar um product service dentro de um componente ou diretiva o angular vai devolver a mesma  instancia
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3001/products';

  constructor(private SnackBar: MatSnackBar, private http: HttpClient) {}
  // eexibir msg do tipo string que retorna vazio
  showMessage(msg: string, isError:boolean = false): void {

    this.SnackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? 'msg-error': 'msg-success'
    });
  }
  create(product: product): Observable<product> {
    return this.http.post<product>(this.baseUrl, product); // esta é a primeira requisiçao do backend,do tipo posta para inserir
  } //função responsavel por inserir o produto dentro de backend o nuvo produto

  read(): Observable<product[]> {
    return this.http.get<product[]>(this.baseUrl);
  }

  readById(id: string): Observable<product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<product>(url);
  }

  upDate(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }
  delete(product:Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.delete<Product>(url);
  }
}
