import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  HostListener,
  Inject,
  Injector,
  OnInit, ViewChild, ViewContainerRef, Type, OnDestroy
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import {ResponsiveUtilsService} from '../../../core/services/responsive-utils/responsive-utils.service';
import {SearchBarHomeDesktopComponent} from '../search-bar-home-desktop/search-bar-home-desktop.component';
import {SearchBarHeaderDesktopComponent} from '../search-bar-header-desktop/search-bar-header-desktop.component';
import {Router} from '@angular/router';
import {SearchBarHomeMobileComponent} from '../search-bar-home-mobile/search-bar-home-mobile.component';
import {hours} from '../../../core/mock/hours';
import {UserService} from '../../../core/state/user/user.service';

export type ComponentsLayoutTypes = Type<SearchBarHomeDesktopComponent> |
  Type<SearchBarHeaderDesktopComponent> | Type<SearchBarHomeMobileComponent>;

@Component({
  selector: 'titan-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  rangeForm: FormGroup;
  cities: string[];
  filteredControlOptions$: Observable<string[]>;
  value: string;

  @ViewChild('viewContainer', {read: ViewContainerRef, static: true}) viewContainer: ViewContainerRef;

  constructor(private fb: FormBuilder,
              public responsiveUtils: ResponsiveUtilsService,
              private cd: ChangeDetectorRef,
              private injector: Injector,
              private router: Router,
              private userService: UserService,
              private resolver: ComponentFactoryResolver) {
    this.createForm();

  }

  ngOnInit(): void {

    this.listenFormValueChanges();

    this.cities = ['Gwangju'];
    this.filteredControlOptions$ = of(this.cities);

    this.filteredControlOptions$ = this.rangeForm.get('where').valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filter(filterString)),
      );

    this.renderComponentsLayout();
  }




  renderDataComponents(component: ComponentsLayoutTypes): void {
    this.viewContainer.clear();
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef = this.viewContainer.createComponent(factory);
    (componentRef.instance).filteredControlOptions$ = this.filteredControlOptions$;
    (componentRef.instance).rangeForm = this.rangeForm;
    (componentRef.instance).fromHours = hours();
    (componentRef.instance).untilHour = hours();
  }

  renderComponentsLayout(): void {
    if (this.responsiveUtils.lgMin && this.router.url.includes('cars-search')) {
      this.renderDataComponents(SearchBarHeaderDesktopComponent);
    } else if (this.responsiveUtils.lgMin) {
      this.renderDataComponents(SearchBarHomeDesktopComponent);
    } else {
      this.renderDataComponents(SearchBarHomeMobileComponent);
    }
  }

  listenFormValueChanges(): void {
    this.rangeForm
      .valueChanges
      .pipe(
        tap(it => {
          console.log(it);
        })
      ).subscribe();
  }


  createForm(): void {
    this.rangeForm = this.fb.group(
      {
        where: ['', [Validators.required]],
        formHour: ['', [Validators.required]],
        range: ['', [Validators.required]],
        untilHour: ['', [Validators.required]]
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  resize(): void {
    this.renderComponentsLayout();
    this.cd.markForCheck();
  }

  submit(): void {
    this.userService.dispatchUserValueForm({
      city: this.rangeForm.get('where').value,
      select: 'model',
      bkdt: {
        start: this.rangeForm.get('range').value.start,
        end: this.rangeForm.get('range').value.end
      },
      untilHour: this.rangeForm.get('untilHour').value,
      fromHour: this.rangeForm.get('formHour').value
    });
    this.router.navigate(['cars-search',
      this.rangeForm.get('where').value,
      'model',
      `${this.rangeForm.get('range').value.start.format('DD-MM-YYYY')}-${this.rangeForm.get('range').value.end.format('DD-MM-YYYY')}`,
      this.rangeForm.get('formHour').value,
      this.rangeForm.get('untilHour').value
    ]);
  }

  private filter(value: string): string[] {
    const filterValue = value?.toLowerCase();
    return this.cities.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
}
