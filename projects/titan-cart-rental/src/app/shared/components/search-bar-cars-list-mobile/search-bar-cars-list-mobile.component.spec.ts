import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCarsListMobileComponent } from './search-bar-cars-list-mobile.component';

describe('SearchBarCarsListMobileComponent', () => {
  let component: SearchBarCarsListMobileComponent;
  let fixture: ComponentFixture<SearchBarCarsListMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarCarsListMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarCarsListMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
