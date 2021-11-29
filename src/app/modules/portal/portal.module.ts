import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchingComponent } from './searching/searching.component';


@NgModule({
  declarations: [HomeComponent, SearchingComponent],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
