import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JusticeComponent } from './justice.component';

describe('JusticeComponent', () => {
  let component: JusticeComponent;
  let fixture: ComponentFixture<JusticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JusticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JusticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
