import { Component } from '@angular/core';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/helm/table';
import { Promo } from '../promo/promo';
import { Checkoutbutton } from '../checkoutbutton/checkoutbutton';
import { Popup } from '../popup/popup';


@Component({
  selector: 'app-tablep',
  imports: [HlmTableComponent, HlmTrowComponent, HlmThComponent, HlmTdComponent, HlmCaptionComponent,Promo,Checkoutbutton,Popup],
  host: {
    class: 'w-full overflow-x-auto',
  },
  template: ` <hlm-table class="w-full min-w-[400px]">
      <hlm-caption></hlm-caption>
      <hlm-trow>
        <hlm-th class="w-52">Perfume</hlm-th>
        <hlm-th class="w-60">Brand</hlm-th>
        <hlm-th class="flex-1">Notable IFF Perfumer</hlm-th>
        <hlm-th class="justify-end w-40">Price</hlm-th>
      </hlm-trow>
      @for (invoice of _invoices; track invoice.invoice) {
        <hlm-trow>
          <hlm-td truncate class="font-medium w-52">{{ invoice.invoice }}</hlm-td>
          <hlm-td class="w-60">{{ invoice.paymentStatus }}</hlm-td>
          <hlm-td class="flex-1">{{ invoice.paymentMethod }}</hlm-td>
          <hlm-td class="justify-end w-40">{{ invoice.totalAmount }}</hlm-td>
        </hlm-trow>
      }
      <hlm-trow class="bg-muted/50 hover:bg-muted">
        <hlm-td truncate class="w-[100px] font-semibold">Total</hlm-td>
        <hlm-td class="w-40"></hlm-td>
        <hlm-td class="flex-1"></hlm-td>
        <hlm-td class="justify-end w-40">$512.99</hlm-td>
      </hlm-trow>
    </hlm-table>
    
    
     <div class="flex justify-center">
<app-promo></app-promo>
</div>

 <div class="flex justify-center">
<app-checkoutbutton></app-checkoutbutton>
</div>

 <div class="flex justify-center">
<app-popup></app-popup>

 </div>


`,
  styleUrl: './tablep.css'
})
export class Tablep {

  protected _invoices = [
    {
      invoice: ' ralph lauren blue	',
      paymentStatus: 'Pollo',
      totalAmount: '$500.00',
      paymentMethod: 'Dominique Ropion, Carlos Benaïm, Olivier Polge',
    },
   
 
  ];

}
