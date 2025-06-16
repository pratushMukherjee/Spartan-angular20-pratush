import { Component } from '@angular/core';
import { HlmSwitchComponent } from '@spartan-ng/helm/switch';
import { HlmLabelDirective } from '@spartan-ng/helm/label';


@Component({
  selector: 'app-darkswitch',
  imports: [HlmSwitchComponent,HlmLabelDirective],
  template: ` <label class="flex items-center text-blue-500" hlmLabel>
            <hlm-switch class="mr-2" />
            Dark mode
        </label>`,
  styleUrl: './darkswitch.css'
})
export class Darkswitch {

}
