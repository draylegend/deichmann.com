import { ComponentFixture, TestBed } from '@angular/core/testing';
import WomanShoesSneakersFeatureComponent from './woman-shoes-sneakers-feature.component';

describe('WomanShoesSneakersFeatureComponent', () => {
  let component: WomanShoesSneakersFeatureComponent;
  let fixture: ComponentFixture<WomanShoesSneakersFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WomanShoesSneakersFeatureComponent],
    });

    fixture = TestBed.createComponent(WomanShoesSneakersFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
