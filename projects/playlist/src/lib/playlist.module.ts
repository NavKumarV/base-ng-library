import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlaylistComponent } from './playlist.component';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption-v8';

@NgModule({
  imports: [
    CommonModule,
    CommonConsumptionModule
  ],
  declarations: [PlaylistComponent],
  exports: [PlaylistComponent]
})
export class PlaylistModule { }
