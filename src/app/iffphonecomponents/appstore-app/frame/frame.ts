import { Component,ViewChild,viewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Getbutton } from '../getbutton/getbutton';
import { Iffphone } from '../../phone-screen/iffphone/iffphone';

@Component({
  selector: 'app-frame',
  imports: [MatButtonModule,MatIconModule,Getbutton,Iffphone],
  templateUrl: './frame.html',
  styleUrl: './frame.css'
})
export class Frame {
@ViewChild(Iffphone) childComponent?:Iffphone
}
