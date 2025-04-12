import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualRouteComponent } from './visual-route.component';

describe('VisualRouteComponent', () => {
  let component: VisualRouteComponent;
  let fixture: ComponentFixture<VisualRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
