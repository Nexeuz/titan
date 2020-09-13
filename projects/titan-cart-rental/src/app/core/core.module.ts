import {NgModule} from '@angular/core';
import {environment} from '@env/environment';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';
import {NbDatepickerModule, NbDialogModule, NbThemeModule} from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot({name: 'corporate'})
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG, useValue: {
        baseUrl: `${environment.host}`
      }
    }
  ],
})
export class CoreModule {
}
