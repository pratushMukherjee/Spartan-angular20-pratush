import { Component } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight, lucideBird } from '@ng-icons/lucide'; 


@Component({
  selector: 'app-bicon',
  imports: [HlmIconDirective, NgIcon],
    providers: [provideIcons({ lucideChevronRight, lucideBird })],

  templateUrl: './bicon.html',
  styleUrl: './bicon.css'
})
export class Bicon {

}
