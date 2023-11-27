import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  WomanShoesFacade,
  WomanShoesService,
} from '@draylegend/woman-shoes/domain';
import WomanShoesSneakersFeatureComponent from './woman-shoes-sneakers-feature.component';

describe('WomanShoesSneakersFeatureComponent', () => {
  let component: WomanShoesSneakersFeatureComponent;
  let fixture: ComponentFixture<WomanShoesSneakersFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WomanShoesSneakersFeatureComponent, HttpClientTestingModule],
      providers: [WomanShoesFacade, WomanShoesService],
    });

    fixture = TestBed.createComponent(WomanShoesSneakersFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
