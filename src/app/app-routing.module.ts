import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToggleSwitchComponent} from './toggle-switch/toggle-switch.component';

const routes: Routes = [
  {
    path: '',
    component: ToggleSwitchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
