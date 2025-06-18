import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-addtocartbutton',
  imports: [MatButtonModule,RouterLink],
  templateUrl: './addtocartbutton.html',
  styleUrl: './addtocartbutton.css'
})
export class Addtocartbutton {

}
