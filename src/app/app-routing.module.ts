import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HistoryComponent } from './components/history/history.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { AddWeightComponent } from './components/add-weight/add-weight.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'history',component:HistoryComponent,
  children:[ {path:'add/:id',component:AddWeightComponent}],
  runGuardsAndResolvers:'always'},
 
  {path:'sign-out',component:SignOutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
