import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routs';

@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
