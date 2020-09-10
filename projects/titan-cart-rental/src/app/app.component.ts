import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, tap} from 'rxjs/operators';
import {SearchBarComponent} from './shared/components/search-bar/search-bar.component';
import {HeaderHomeMenuComponent} from './shared/components/header-home-menu/header-home-menu.component';
import {SearchBarHeaderMobileComponent} from './shared/components/search-bar-header-mobile/search-bar-header-mobile.component';
import {ResponsiveUtilsService} from './core/services/responsive-utils/responsive-utils.service';

@Component({
  selector: 'titan-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements  AfterViewInit {
  @ViewChild('viewContainer', {read: ViewContainerRef, static: true}) viewContainer: ViewContainerRef;
  @ViewChild('img') img: HTMLImageElement;

  constructor(private resolver: ComponentFactoryResolver,
              private injector: Injector,
              private router: Router,
              private responsive: ResponsiveUtilsService) {
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
        tap(it => this.toggleComponents())
      ).subscribe();
  }
}
