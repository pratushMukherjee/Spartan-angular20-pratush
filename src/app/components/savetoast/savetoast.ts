import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';
import { HlmToasterComponent } from '@spartan-ng/helm/sonner';
import { HlmButtonDirective } from '@spartan-ng/helm/button';

@Component({
    selector: 'app-savetoast',
    imports: [HlmToasterComponent, HlmButtonDirective],
    template: `
        <hlm-toaster />
        <button hlmBtn (click)="showToast() ">Save All Changes</button>
    `,
})
export class Savetoast {
    showToast() {
        toast('All Changes Have been saved', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
            },
        });
    }
}