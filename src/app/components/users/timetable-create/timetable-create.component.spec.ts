import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableCreateComponent } from './timetable-create.component';

describe('TimetableCreateComponent', () => {
  let component: TimetableCreateComponent;
  let fixture: ComponentFixture<TimetableCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimetableCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
