import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HistoryComponent } from './components/history/history.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { AddWeightComponent } from './components/add-weight/add-weight.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    HistoryComponent,
    SignOutComponent,
    AddWeightComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
