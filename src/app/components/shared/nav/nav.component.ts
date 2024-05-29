import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router: Router) {
  }

  navigateToExplorer() {
    this.router.navigate(['explorer']);
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateToShop() {
    this.router.navigate(['shopping']);
  }

  navigateToMessages() {
    this.router.navigate(['messages']);
  }

  navigateToWellness() {
    this.router.navigate(['wellness']);
  }
}
