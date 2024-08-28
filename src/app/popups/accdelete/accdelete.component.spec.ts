import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccdeleteComponent } from './accdelete.component';

describe('AccdeleteComponent', () => {
  let component: AccdeleteComponent;
  let fixture: ComponentFixture<AccdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccdeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
