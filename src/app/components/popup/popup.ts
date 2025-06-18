

import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/helm/popover';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { provideIcons } from '@ng-icons/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-popup',
imports: [MatButtonModule,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
    HlmButtonDirective,
    HlmLabelDirective,
    HlmInputDirective,RouterLink
  ],
  template: `
    <brn-popover side="bottom" sideOffset="8">
      <button id="edit-profile" variant="outline" brnPopoverTrigger hlmBtn>Checkout</button>
      <div hlmPopoverContent class="w-100 h-110 grid gap-4" *brnPopoverContent="let ctx">
        <div class="space-y-2">
          <h5 class= "flex justify-center text-xl">Are you sure you want to checkout?</h5>
        </div>

        
            <button matButton routerLink="/alert" >yes</button>

       
      </div>
    </brn-popover>
  `,
})
export class Popup {}