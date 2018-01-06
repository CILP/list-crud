import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './shared/components/header.component';
import { ListComponent } from './list/list.component';

import { ListService } from './list/list.service';
import { ListResolver } from './list/list.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ListService,
    ListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
