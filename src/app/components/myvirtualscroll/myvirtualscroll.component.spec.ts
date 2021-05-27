import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvirtualscrollComponent } from './myvirtualscroll.component';

describe('MyvirtualscrollComponent', () => {
  let component: MyvirtualscrollComponent;
  let fixture: ComponentFixture<MyvirtualscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyvirtualscrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvirtualscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
