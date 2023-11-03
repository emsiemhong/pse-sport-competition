import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixtureComponent } from './components/fixture/fixture.component';
import { ResultComponent } from './components/result/result.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/fixtures',
    pathMatch: 'full'
  },
  {
    path: 'fixtures',
    component: FixtureComponent
  },
  {
    path: 'results',
    component: ResultComponent
  },
  {
    path: 'tables',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
