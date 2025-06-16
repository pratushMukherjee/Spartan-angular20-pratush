import { Component } from '@angular/core';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/helm/alert';

import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { NgIcon,provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert  } from '@ng-icons/lucide';



@Component({
  selector: 'app-loading',
  imports: [NgIcon,HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective, HlmAlertTitleDirective,HlmIconDirective],
  providers: [provideIcons({ lucideTriangleAlert  })],
  template:`<div hlmAlert variant="destructive">
      <ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" />
      <h4 hlmAlertTitle>Unexpected Error</h4>
      <p hlmAlertDesc>Your session has expired. Please log in again.</p>
    </div>`,
  styleUrl: './loading.css'
})
export class Loading {

}
