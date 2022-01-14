import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-product-texas',
  templateUrl: './product-texas.component.html',
  styleUrls: ['./product-texas.component.css'],
})

//////////////////////////////////////
export class ProductCreateComponent implements OnInit {
  product: product = {
    name: '',
    price: 0,
    create: undefined,
  };

  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {}
  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage('operation realise with sucess');
      this.router.navigate(['/products']);
    });
  }
  cancel(): void {
    this.router.navigate(['/']);
  }

}
