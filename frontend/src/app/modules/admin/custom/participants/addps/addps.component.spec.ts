import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpsComponent } from './addps.component';

describe('AddpsComponent', () => {
  let component: AddpsComponent;
  let fixture: ComponentFixture<AddpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
