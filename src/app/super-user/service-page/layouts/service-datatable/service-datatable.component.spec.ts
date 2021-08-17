import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDatatableComponent } from './service-datatable.component';

describe('ServiceDatatableComponent', () => {
  let component: ServiceDatatableComponent;
  let fixture: ComponentFixture<ServiceDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
