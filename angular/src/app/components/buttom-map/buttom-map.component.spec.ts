import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomMapComponent } from './buttom-map.component';

describe('ButtomMapComponent', () => {
  let component: ButtomMapComponent;
  let fixture: ComponentFixture<ButtomMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtomMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtomMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
