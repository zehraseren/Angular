import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupsHomeComponent } from './popups-home/popups-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PopupsHomeComponent, ModalComponent],
  imports: [CommonModule, PopupsRoutingModule, SharedModule],
})
export class PopupsModule {}
