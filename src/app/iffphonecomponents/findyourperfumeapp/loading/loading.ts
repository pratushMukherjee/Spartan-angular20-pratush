import { Component,OnInit  } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-loading',
  imports: [MatProgressBarModule,RouterLink],
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class Loading implements OnInit {

    constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/polograph']); // Replace with your route path
    }, 5000); // 3000 ms = 3 seconds
  }

}
