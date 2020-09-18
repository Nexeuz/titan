import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver, DoCheck,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {NavigationEnd, Route, Router} from '@angular/router';
import {filter, tap} from 'rxjs/operators';
import {SearchBarComponent} from './shared/components/search-bar/search-bar.component';
import {HeaderHomeMenuComponent} from './shared/components/header-home-menu/header-home-menu.component';
import {SearchBarHeaderMobileComponent} from './shared/components/search-bar-header-mobile/search-bar-header-mobile.component';
import {ResponsiveUtilsService} from './core/services/responsive-utils/responsive-utils.service';
import {GetCarsService} from './core/state/get-cars/get-cars.service';
import {UserService} from './core/state/user/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'titan-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements  AfterViewInit, DoCheck {
  @ViewChild('viewContainer', {read: ViewContainerRef, static: true}) viewContainer: ViewContainerRef;
  @ViewChild('img') img: HTMLImageElement;

  isHeaderWhite$: Observable<boolean> =  this.userService.userQuery.select(it => it.ui?.isHeaderWhite);

  constructor(private resolver: ComponentFactoryResolver,
              private injector: Injector,
              private router: Router,
              private cd: ChangeDetectorRef,
              public userService: UserService,
              private getCars: GetCarsService,
              private responsive: ResponsiveUtilsService) {

  }

  ngDoCheck(): void {
  }


  toggleComponents(): void {
    this.viewContainer.clear();
    let factory: ComponentFactory<any>;
    if (this.router.url.includes('cars-search') && this.responsive.lgMin) {
       factory = this.resolver.resolveComponentFactory(SearchBarComponent);
    } else if (this.router.url.includes('cars-search') )  {
      factory = this.resolver.resolveComponentFactory(SearchBarHeaderMobileComponent);
    } else  {
      factory = this.resolver.resolveComponentFactory(HeaderHomeMenuComponent);
    }
    this.viewContainer.createComponent(factory);
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter(it => it instanceof NavigationEnd ),
        tap(it => this.toggleComponents()),
        tap(it => this.toggleHeaderColor(this.router.url.includes('cars-search')))
      ).subscribe();
  }

  toggleHeaderColor(value: boolean): void {
    this.userService.userStore.update(state => (
      {...state, ui: {isHeaderWhite: value}}
    ));
  }
}
