import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    HeaderComponent,
    NavComponent
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

}
