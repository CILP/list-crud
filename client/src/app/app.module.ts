import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { GenericFormComponent } from './shared/components/generic-form/generic-form.component';
import { ListComponent } from './list/list.component';
import { GenericCardComponent } from './shared/components/generic-card/generic-card.component';

import { ListService } from './list/list.service';
import { ListResolver } from './list/list.resolver';
import { ItemService } from './item/item.service';
import { ItemResolver } from './item/item.resolver';
import { SelectedListService } from './shared/services/selected-list.service';

import { AddListComponent } from './add-list/add-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { ItemComponent } from './item/item.component';
import { ListContentComponent } from './list-content/list-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListComponent,
    AddListComponent,
    GenericFormComponent,
    EditListComponent,
    GenericCardComponent,
    ItemComponent,
    ListContentComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ListService,
    ListResolver,
    SelectedListService,
    ItemService,
    ItemResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
