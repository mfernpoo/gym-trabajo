import { Routes } from '@angular/router';
import {SigninComponent} from "./components/signin/signin.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {ExplorerComponent} from "./components/explorer/explorer.component";
import {ShopComponent} from "./components/shop/shop.component";
import {MessageComponent} from "./components/message/message.component";
import {WellnessComponent} from "./components/wellness/wellness.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: 'explorer', component: ExplorerComponent },
  { path: 'shopping', component: ShopComponent },
  { path: 'messages', component: MessageComponent },
  { path: 'wellness', component: WellnessComponent },

];
