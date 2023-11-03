import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FixtureComponent } from './components/fixture/fixture.component';
import { ResultComponent } from './components/result/result.component';
import { TableComponent } from './components/table/table.component';
import { StateComponent } from './components/state/state.component';
import { PlayerComponent } from './components/player/player.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FixtureComponent,
    ResultComponent,
    TableComponent,
    StateComponent,
    PlayerComponent,
    FrontLayoutComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class FrontModule { }
