import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NbDialogService, NbMenuItem} from '@nebular/theme';
import {SignUpModalComponent} from '../../../modules/autentication/pages/sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'titan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('viewContainer', {static: true}) viewContainer: ViewContainerRef;

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: '',

      expanded: false,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    }];
  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialogService.open(SignUpModalComponent);
  }

}
