import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

declare var paypal;


@Component({
  selector: 'titan-paypal-btn',
  templateUrl: './paypal-btn.component.html',
  styleUrls: ['./paypal-btn.component.scss'],
})
export class PaypalBtnComponent implements OnChanges {
  @ViewChild('paypal', {static: false}) paypalElement: ElementRef;
  @Input() description: string;
  @Input() price: number;
  @Input() btnVisible: boolean;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.btnVisible.currentValue) {
      setTimeout(() => {
        paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.description,
                  amount: {
                    value: this.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: err => {
            console.error(err);
          },
          onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
          },
        })
          .render(this.paypalElement.nativeElement);
      }, 0);

    }
  }




}
