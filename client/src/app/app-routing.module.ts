import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddListComponent } from './add-list/add-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
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
  },
  {
    path: 'list/edit/:id',
    component: EditListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
