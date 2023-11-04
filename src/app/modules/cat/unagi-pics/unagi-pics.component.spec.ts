import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnagiPicsComponent } from './unagi-pics.component';

describe('UnagiPicsComponent', () => {
  let component: UnagiPicsComponent;
  let fixture: ComponentFixture<UnagiPicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UnagiPicsComponent]
    });
    fixture = TestBed.createComponent(UnagiPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
