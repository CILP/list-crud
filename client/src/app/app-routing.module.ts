import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddListComponent } from './add-list/add-list.component';
import { ListResolver } from './list/list.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  {
    path: 'list',
    component: HomeComponent,
    resolve: {
      lists: ListResolver
    }
  },
  {
    path: 'list/add',
    component: AddListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
