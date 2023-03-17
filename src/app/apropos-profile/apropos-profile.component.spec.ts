import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposProfileComponent } from './apropos-profile.component';

describe('AproposProfileComponent', () => {
  let component: AproposProfileComponent;
  let fixture: ComponentFixture<AproposProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproposProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AproposProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
