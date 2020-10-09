import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NbDialogRef, NbDialogService, NbMenuItem} from '@nebular/theme';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'titan-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpModalComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              protected ref: NbDialogRef<SignUpModalComponent>) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });
  }


}
