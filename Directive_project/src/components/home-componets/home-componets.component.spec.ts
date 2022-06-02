import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponetsComponent } from './home-componets.component';

describe('HomeComponetsComponent', () => {
  let component: HomeComponetsComponent;
  let fixture: ComponentFixture<HomeComponetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
