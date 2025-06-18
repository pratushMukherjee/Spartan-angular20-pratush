import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-app1',
  imports: [MatButtonModule,MatIconModule,RouterLink,RouterOutlet],
  templateUrl: './app1.html',
  styleUrl: './app1.css'
})
export class App1 {

}
