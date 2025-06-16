









import { Component } from '@angular/core';
import {
 HlmToggleGroupItemDirective,
 HlmToggleGroupDirective,
} from '@spartan-ng/helm/toggle-group';
import { BrnToggleGroupItemDirective, BrnToggleGroupComponent } from '@spartan-ng/brain/toggle-group';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { provideIcons,NgIcon } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';

@Component({
  selector: 'app-toggleg',
imports: [
	 BrnToggleGroupItemDirective,
	 BrnToggleGroupComponent,
	 HlmIconDirective,
	 HlmToggleGroupItemDirective,
	 HlmToggleGroupDirective,
	 NgIcon,
	],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })],
  template: `
	<brn-toggle-group hlm multiple="true" nullable="true" variant="outline">
	<button aria-label="Gold Fish" value="Gold Fish" hlmToggleGroupItem>
  Gold Fish
</button>

	 <button aria-label="Italic" value="Oreos" hlmToggleGroupItem>
     Chips Ahoy
	 </button>

	 <button aria-label="Underline" value="Chips Ahoy" hlmToggleGroupItem>
    Glow in the Dark Cococola
	 </button>
	</brn-toggle-group>
  `,
})
export class Toggleg {}

