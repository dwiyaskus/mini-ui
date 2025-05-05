import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniUiComponent } from './mini-ui.component';

describe('MiniUiComponent', () => {
  let component: MiniUiComponent;
  let fixture: ComponentFixture<MiniUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
