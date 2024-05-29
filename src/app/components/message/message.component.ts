import { Component } from '@angular/core';
import {HeaderComponent} from "../shared/header/header.component";
import {NavComponent} from "../shared/nav/nav.component";

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
