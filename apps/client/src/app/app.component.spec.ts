import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });
});
