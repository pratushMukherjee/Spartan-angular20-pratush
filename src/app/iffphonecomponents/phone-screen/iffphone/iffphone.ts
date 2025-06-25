import { Component, inject } from '@angular/core';
import { App1 } from '../../findyourperfumeapp/app1/app1';
import { Appicon } from '../../appstore-app/appicon/appicon';

import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { BrnContextMenuTriggerDirective, BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemCheckComponent,
  HlmMenuItemCheckboxDirective,
  HlmMenuItemDirective,
  HlmMenuItemIconDirective,
  HlmMenuItemRadioComponent,
  HlmMenuItemRadioDirective,
  HlmMenuItemSubIndicatorComponent,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
  HlmSubMenuComponent,
} from '@spartan-ng/helm/menu';
import { CommonModule } from '@angular/common';
import { General } from '../../../general';

@Component({
  selector: 'app-iffphone',
  imports: [App1,Appicon,BrnMenuTriggerDirective,
      BrnContextMenuTriggerDirective,
  
      HlmMenuComponent,
      HlmSubMenuComponent,
      HlmMenuItemDirective,
      HlmMenuItemSubIndicatorComponent,
      HlmMenuLabelComponent,
      HlmMenuShortcutComponent,
      HlmMenuSeparatorComponent,
      HlmMenuItemIconDirective,
      HlmMenuItemCheckComponent,
      HlmMenuItemRadioComponent,
      HlmMenuGroupComponent,
  
      HlmButtonDirective,
      HlmIconDirective,
      HlmMenuItemCheckboxDirective,
      HlmMenuItemRadioDirective,CommonModule],
  templateUrl: './iffphone.html',
  styleUrl: './iffphone.css'
})
export class Iffphone {


    generalService = inject(General);
 
    showChatBox = this.generalService.showChatBox;

  closeChatBox() {
    this.generalService.resetChatBox();
  }
}
