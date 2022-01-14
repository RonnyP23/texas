import { product } from 'src/app/components/product/product.model';

import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  product: product = {
    create: undefined,
    id: 0,
    name: '',
    price: undefined,
  };
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }
  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage('successfully delete')
      this.router.navigate(['/products']);
    });
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
