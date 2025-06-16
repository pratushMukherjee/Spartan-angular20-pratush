

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

@Component({
  selector: 'app-popup',
imports: [
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
    HlmButtonDirective,
    HlmLabelDirective,
    HlmInputDirective,
  ],
  template: `
    <brn-popover sideOffset="5">
      <button id="edit-profile" variant="outline" brnPopoverTrigger hlmBtn>Open Landing Page</button>
      <div hlmPopoverContent class="w-150 h-150 grid gap-4" *brnPopoverContent="let ctx">
        <div class="space-y-2">
          <h4 class= "flex justify-center text-xl">Welcome to Knowledge Hub</h4>
        </div>
        
       
      </div>
    </brn-popover>
  `,
})
export class Popup {}