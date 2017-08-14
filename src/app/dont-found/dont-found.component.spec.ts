import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DontFoundComponent } from './dont-found.component';

describe('DontFoundComponent', () => {
  let component: DontFoundComponent;
  let fixture: ComponentFixture<DontFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DontFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DontFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
