import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverheighteenComponent } from './overheighteen.component';

describe('OverheighteenComponent', () => {
  let component: OverheighteenComponent;
  let fixture: ComponentFixture<OverheighteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverheighteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverheighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
