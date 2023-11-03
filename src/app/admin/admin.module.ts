import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { FixtureResultComponent } from './components/fixture-result/fixture-result.component';
import { StandingComponent } from './components/standing/standing.component';
import { TeamComponent } from './components/team/team.component';
import { StateComponent } from './components/state/state.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminComponent } from './components/admin/admin.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    OverviewComponent,
    FixtureResultComponent,
    StandingComponent,
    TeamComponent,
    StateComponent,
    SchedulerComponent,
    AdminLayoutComponent,
    AdminComponent,
    TournamentComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AdminModule { }
