import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptevusComponent } from './optevus.component';

describe('OptevusComponent', () => {
  let component: OptevusComponent;
  let fixture: ComponentFixture<OptevusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptevusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptevusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
