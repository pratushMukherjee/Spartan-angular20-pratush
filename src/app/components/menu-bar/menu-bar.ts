import { Component } from '@angular/core';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import {
  HlmMenuBarComponent,
  HlmMenuBarItemDirective,
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemCheckboxDirective,
  HlmMenuItemCheckComponent,
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


@Component({
  selector: 'app-menu-bar',
  imports: [// Brain
    BrnMenuTriggerDirective,
   

    // Helm
    HlmMenuBarComponent,
    HlmMenuBarItemDirective,
    HlmMenuComponent,
    HlmMenuGroupComponent,
    HlmMenuItemDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmSubMenuComponent,
    HlmMenuShortcutComponent,
    HlmMenuSeparatorComponent,],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css'
})
export class MenuBar {

}
