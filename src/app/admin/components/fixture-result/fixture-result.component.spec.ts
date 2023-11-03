import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureResultComponent } from './fixture-result.component';

describe('FixtureResultComponent', () => {
  let component: FixtureResultComponent;
  let fixture: ComponentFixture<FixtureResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixtureResultComponent]
    });
    fixture = TestBed.createComponent(FixtureResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
