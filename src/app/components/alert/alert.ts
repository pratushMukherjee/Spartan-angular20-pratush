import { Component } from '@angular/core';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/helm/alert';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { provideIcons } from '@ng-icons/core';
import { lucideBox } from '@ng-icons/lucide';
@Component({
  selector: 'app-alert',
  imports: [HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
    HlmIconDirective,],
      providers: [provideIcons({ lucideBox })],

  template: `
    <div hlmAlert>
      <ng-icon hlm hlmAlertIcon name="lucideBox" />
      <h4 hlmAlertTitle>Your Order has been confirmed!</h4>
      <p hlmAlertDesc>
        NO RETURNS NO REFUNDS AFTER PRODUCT IS OPENED<br />
        Confirmation sent to your email and number
      </p>
    </div>
  `,
  styleUrl: './alert.css'
})
export class Alert {

}
