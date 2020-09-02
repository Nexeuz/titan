import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'titan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('viewContainer', {static: true}) viewContainer: ViewContainerRef;
  constructor() { }

  ngOnInit(): void {
  }

  openDialog(): void {

  }

}
