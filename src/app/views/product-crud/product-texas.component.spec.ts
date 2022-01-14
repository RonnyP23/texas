import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTexasComponent } from './product-texas.component';

describe('ProductTexasComponent', () => {
  let component: ProductTexasComponent;
  let fixture: ComponentFixture<ProductTexasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTexasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTexasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
