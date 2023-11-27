import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '@draylegend/woman-shoes/domain';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    });

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.product = {
      name: 'SOme brand',
      brandName: 'Some brand name',
      description: 'Some description',
      images: [{ url: 'some-url' }],
      taglist: [{ description: 'Some description', code: 'NewTag' }],
      allPrices: [{ formattedValue: '20,32' }, { formattedValue: '40,32 €' }],
      price: { formattedValue: '20,32' },
    } as Product;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
