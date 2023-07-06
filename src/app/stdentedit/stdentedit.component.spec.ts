import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdenteditComponent } from './stdentedit.component';

describe('StdenteditComponent', () => {
  let component: StdenteditComponent;
  let fixture: ComponentFixture<StdenteditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdenteditComponent]
    });
    fixture = TestBed.createComponent(StdenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
