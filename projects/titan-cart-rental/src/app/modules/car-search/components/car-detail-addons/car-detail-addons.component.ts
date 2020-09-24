import { Component, OnInit } from '@angular/core';
import {AddonsService} from '../../../../core/state/addons/addons.service';
import {combineLatest, Observable} from 'rxjs';
import {Addon} from '../../../../core/state/addons/addon.model';
import {selectPersistStateInit} from '@datorama/akita';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'titan-car-detail-addons',
  templateUrl: './car-detail-addons.component.html',
  styleUrls: ['./car-detail-addons.component.scss']
})
export class CarDetailAddonsComponent implements OnInit {
  addons$: Observable<Addon[]> = this.addons.addonsQuery.selectAll();
  constructor(private addons: AddonsService) { }

  ngOnInit(): void {
  this.addons.getCars()
    .subscribe();
  }

  updateEntity(addon: Addon): void {
    this.addons.setActiveAndToggle(addon.itemid);
  }

  removeEntity(addon: Addon): void {
    this.addons.deactivateAndToggle(addon.itemid);
  }
}
