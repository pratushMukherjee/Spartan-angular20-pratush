import { Component } from '@angular/core';
import {
  HlmAccordionContentComponent,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/helm/accordion';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideBird } from '@ng-icons/lucide'; 

import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
  selector: 'app-accordian',
  imports: [HlmAccordionDirective,
        HlmAccordionItemDirective,
        HlmAccordionTriggerDirective,
        HlmAccordionContentComponent,
        HlmAccordionIconDirective,
        HlmIconDirective],
      viewProviders: [provideIcons({ lucideChevronDown })],

  template: `
        <div hlmAccordion>
            <div hlmAccordionItem>
                <button hlmAccordionTrigger>
                    Name?
                    <ng-icon name="lucideChevronDown" hlm hlmAccIcon />
                </button>
                <hlm-accordion-content>polo ralph lauren blue</hlm-accordion-content>
            </div>

            <div hlmAccordionItem>
                <button hlmAccordionTrigger>
                    Price?
                    <ng-icon name="lucideChevronDown" hlm hlmAccIcon />
                </button>
                <hlm-accordion-content>
                    $500 + tax
                </hlm-accordion-content>
            </div>

            <div hlmAccordionItem>
                <button hlmAccordionTrigger>
                    Origin?
                    <ng-icon name="lucideChevronDown" hlm hlmAccIcon />
                </button>
                <hlm-accordion-content>
                    Brazil
                </hlm-accordion-content>
            </div>
        </div>
    `,
  styleUrl: './accordian.css'
})
export class Accordian {

}
