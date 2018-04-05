import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechModulusComponent } from './chech-modulus.component';

describe('ChechModulusComponent', () => {
  let component: ChechModulusComponent;
  let fixture: ComponentFixture<ChechModulusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechModulusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechModulusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
