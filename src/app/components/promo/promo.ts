import { Component } from '@angular/core';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmLabelDirective } from '@spartan-ng/helm/label';




@Component({
  selector: 'app-promo',
  imports: [HlmInputDirective,HlmButtonDirective,HlmLabelDirective],
  template: `  <div class='flex items-center w-full max-w-sm space-x-2'><label hlmLabel 
    >Enter Your Promo Code
      <input aria-label='Promo Code' class='w-80' hlmInput type='email' placeholder='Promo Code' />
      </label>
      <button hlmBtn class="mt-3 cursor-pointer">Enter</button>
      
    </div>`,
  styleUrl: './promo.css'
})
export class Promo {

}
