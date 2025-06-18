import { Component } from '@angular/core';
import { Flavorbutton } from '../flavorbutton/flavorbutton';
import { Datebutton } from '../datebutton/datebutton';
import { Generatebutton } from '../generatebutton/generatebutton';

@Component({
  selector: 'app-fyp-app',
  imports: [Flavorbutton, Datebutton, Generatebutton],
  templateUrl: './fyp-app.html',
  styleUrl: './fyp-app.css'
})
export class FypApp {

}
