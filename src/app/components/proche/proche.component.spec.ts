import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcheComponent } from './proche.component';

describe('ProcheComponent', () => {
  let component: ProcheComponent;
  let fixture: ComponentFixture<ProcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
