import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
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
  updateProduct(): void {
    this.productService.upDate(this.product).subscribe(() => {
      this.productService.showMessage('successfully updated')
      this.router.navigate(['/products']);
    });
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
