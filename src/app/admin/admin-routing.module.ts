import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { FixtureResultComponent } from './components/fixture-result/fixture-result.component';
import { StandingComponent } from './components/standing/standing.component';
import { TeamComponent } from './components/team/team.component';
import { StateComponent } from './components/state/state.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { AdminComponent } from './components/admin/admin.component';
import { TournamentComponent } from './components/tournament/tournament.component';

const routes: Routes = [
  {
    path: 'tournament',
    component: TournamentComponent,
    children: [
      {
        path: ':id/overview',
        component: OverviewComponent
      },
      {
        path: ':id/fixture-results',
        component: FixtureResultComponent
      },
      {
        path: ':id/standing',
        component: StandingComponent
      },
      {
        path: ':id/teams',
        component: TeamComponent
      },
      {
        path: ':id/states',
        component: StateComponent
      },
      {
        path: ':id/scheduler',
        component: SchedulerComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
