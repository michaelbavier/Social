import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscriminationComponent } from './discrimination.component';

describe('DiscriminationComponent', () => {
  let component: DiscriminationComponent;
  let fixture: ComponentFixture<DiscriminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscriminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscriminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
