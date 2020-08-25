import { NgModule } from '@angular/core';
import {environment} from '@env/environment';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';



@NgModule({
  declarations: [],
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
})
export class CoreModule { }
