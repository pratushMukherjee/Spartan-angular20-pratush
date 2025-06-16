

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCross } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective,
} from '@spartan-ng/helm/sheet';

@Component({
  selector: 'app-sidebar',
imports: [
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetFooterComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmButtonDirective,
    HlmInputDirective,
    HlmIconDirective,
    HlmLabelDirective,
  ],
  providers: [provideIcons({ lucideCross })],
  template: `
      <hlm-sheet side="left" class="w-[260px] bg-muted text-muted-foreground">
    <button brnSheetTrigger hlmBtn variant="outline" class="m-2">☰</button>
    <hlm-sheet-content *brnSheetContent="let ctx">
      <hlm-sheet-header class="p-4 border-b">
        <button hlmBtn class="w-full justify-start" variant="ghost">
          ➕ New Chat
        </button>
      </hlm-sheet-header>

      <div class="flex flex-col flex-1 overflow-y-auto p-2 gap-1">
        <button hlmBtn variant="ghost" class="justify-start text-left">
          🧠 My First Chat
        </button>
        <button hlmBtn variant="ghost" class="justify-start text-left">
          📄 Project Notes
        </button>
        <button hlmBtn variant="ghost" class="justify-start text-left">
          🤖 AI Questions
        </button>
        <!-- Add more mock chat threads -->
      </div>

      <hlm-sheet-footer class="border-t p-4 flex flex-col gap-2">
        <button hlmBtn variant="ghost" class="justify-start text-left">⚙️ Settings</button>
        <button hlmBtn variant="ghost" class="justify-start text-left">💎 Upgrade</button>
        <button hlmBtn variant="ghost" class="justify-start text-left text-red-500">🚪 Log Out</button>
      </hlm-sheet-footer>
    </hlm-sheet-content>
  </hlm-sheet>
  `,
})
export class Sidebar {}