import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPicsComponent } from './cat-pics.component';

describe('CatPicsComponent', () => {
  let component: CatPicsComponent;
  let fixture: ComponentFixture<CatPicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatPicsComponent]
    });
    fixture = TestBed.createComponent(CatPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
