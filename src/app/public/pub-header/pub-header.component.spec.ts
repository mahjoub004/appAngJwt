import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubHeaderComponent } from './pub-header.component';

describe('PubHeaderComponent', () => {
  let component: PubHeaderComponent;
  let fixture: ComponentFixture<PubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
