import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-downloading',
  imports: [MatProgressBarModule,RouterLink],
  templateUrl: './downloading.html',
  styleUrl: './downloading.css'
})
export class Downloading {

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/iffphone']); // Replace with your route path
    }, 5000); // 3000 ms = 3 seconds
  }

}
