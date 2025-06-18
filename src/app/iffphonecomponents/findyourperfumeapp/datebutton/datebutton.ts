import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-datebutton',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
    changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './datebutton.html',
  styleUrl: './datebutton.css'
})
export class Datebutton {

}
