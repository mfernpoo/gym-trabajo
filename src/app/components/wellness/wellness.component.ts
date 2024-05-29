import { Component } from '@angular/core';
import {HeaderComponent} from "../shared/header/header.component";
import {NavComponent} from "../shared/nav/nav.component";

@Component({
  selector: 'app-wellness',
  standalone: true,
  imports: [
    HeaderComponent,
    NavComponent
  ],
  templateUrl: './wellness.component.html',
  styleUrl: './wellness.component.css'
})
export class WellnessComponent {

}
