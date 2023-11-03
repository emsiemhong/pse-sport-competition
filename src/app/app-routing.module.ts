import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front/front-layout/front-layout.component';
import { LoginComponent } from './admin/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    loadChildren: () => import('./front/front.module').then(m => m.FrontModule)
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'admin/login',
    component: LoginComponent
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
