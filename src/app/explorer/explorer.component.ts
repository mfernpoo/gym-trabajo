import { Component } from '@angular/core';
import {NavComponent} from "../nav/nav.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [
    NavComponent,
    HeaderComponent
  ],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.css'
})
export class ExplorerComponent {

}
