import { Routes } from '@angular/router';
import { Bicon } from './components/bicon/bicon';
import { Sidebar } from './components/sidebar/sidebar';
import { Iffphone } from './iffphonecomponents/iffphone/iffphone';
import { FypApp } from './iffphonecomponents/findyourperfumeapp/fyp-app/fyp-app';
import { Loading } from './iffphonecomponents/findyourperfumeapp/loading/loading';
import { Poloraplh } from './iffphonecomponents/findyourperfumeapp/poloraplh/poloraplh';
import { Tablep } from './components/tablep/tablep';
import { Alert } from './components/alert/alert';

export const routes: Routes = [

    {
        path:'bicon',
        component:Bicon
    },

    {
        path:'sidebar',
        component:Sidebar

    },
      {
        path:'iffphone',
        component:Iffphone

    },
     {
        path:'fypapp',
        component:FypApp

    },
       {
        path:'loading',
        component:Loading

    },

    {
        path:'polograph',
        component:Poloraplh

    },
    {
        path:'cart',
        component:Tablep
    },
    {
        path:'alert',
        component:Alert
    }

    
];
