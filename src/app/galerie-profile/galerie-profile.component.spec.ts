import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieProfileComponent } from './galerie-profile.component';

describe('GalerieProfileComponent', () => {
  let component: GalerieProfileComponent;
  let fixture: ComponentFixture<GalerieProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerieProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
