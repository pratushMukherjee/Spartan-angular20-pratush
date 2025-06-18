import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuBar } from './components/menu-bar/menu-bar';
import { Bicon } from './components/bicon/bicon';
import { Loading } from './components/loading/loading';
import { Darkswitch } from './components/darkswitch/darkswitch';
import { Tablep } from './components/tablep/tablep';
import { Promo } from './components/promo/promo';
import { Model } from './components/model/model';
import { Savetoast } from './components/savetoast/savetoast';
import { Nextpage } from './components/nextpage/nextpage';
import { Sidebar } from './components/sidebar/sidebar';
import { Popup } from './components/popup/popup';
import { Toggleg } from './components/toggleg/toggleg';



@Component({
  selector: 'app-root',
  imports: [MenuBar,Bicon,Loading,Darkswitch,Tablep,Promo,Model,Savetoast, Nextpage,Sidebar,Popup,Toggleg,RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-project';
}
