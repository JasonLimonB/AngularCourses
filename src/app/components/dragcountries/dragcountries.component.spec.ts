import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragcountriesComponent } from './dragcountries.component';

describe('DragcountriesComponent', () => {
  let component: DragcountriesComponent;
  let fixture: ComponentFixture<DragcountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragcountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
