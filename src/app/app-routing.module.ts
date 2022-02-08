import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitorListComponent} from "./competitor-list/competitor-list.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', component: CompetitorListComponent }
  // {
  //   path: '/',
  //   component: AppComponent,
  //   loadChildren: () => import('./competitor-list/').then(m => m.DashboardsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
