import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //para navegação
import { Product } from '../product.model';
import { ProductService } from '../../product/product.service';

@Component({
  ///////////////////DECORETOR////////////////CLASSIFICA A PAGINA COMO UM COMPONENTE OU UMA DIRETIVA
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductTexasComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0,
    create: undefined,
  };

  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {}
  //método createProduts é quem vai desparar a chamada para a requisiçao feita em service
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
