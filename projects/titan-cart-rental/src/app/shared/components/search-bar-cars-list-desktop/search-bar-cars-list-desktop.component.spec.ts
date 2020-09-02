import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCarsListDesktopComponent } from './search-bar-cars-list-desktop.component';

describe('SearchBarCarsListDesktopComponent', () => {
  let component: SearchBarCarsListDesktopComponent;
  let fixture: ComponentFixture<SearchBarCarsListDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarCarsListDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarCarsListDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
