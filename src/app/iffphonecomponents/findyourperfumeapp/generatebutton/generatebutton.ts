import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-generatebutton',
  imports: [MatButtonModule,RouterLink],
  templateUrl: './generatebutton.html',
  styleUrl: './generatebutton.css'
})
export class Generatebutton {

}
