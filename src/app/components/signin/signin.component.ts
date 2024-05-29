import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private router: Router) {
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

}
