import { Component } from '@angular/core';
import {HeaderComponent} from "../shared/header/header.component";
import {NavComponent} from "../shared/nav/nav.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    HeaderComponent,
    NavComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
