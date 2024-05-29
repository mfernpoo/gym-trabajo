import { Component } from '@angular/core';
import {NavComponent} from "../shared/nav/nav.component";
import {HeaderComponent} from "../shared/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



}
