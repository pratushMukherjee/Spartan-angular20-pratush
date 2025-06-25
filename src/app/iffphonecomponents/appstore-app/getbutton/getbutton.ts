import { Component,inject,ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Iffphone } from '../../phone-screen/iffphone/iffphone';
import { General } from '../../../general';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-getbutton',
  imports: [MatButtonModule,Iffphone,RouterLink],
  templateUrl: './getbutton.html',
  styleUrl: './getbutton.css'
})
export class Getbutton {
  generalService = inject(General)

  emitClick() {
    this.generalService.openChatBox();
  }
  


}
