import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'Login', component: LoginComponent},
  { path:'home', component: HomeComponent},
  { path:'aboutus', component: HomeComponent},
  { path:'balnearios', component: HomeComponent},
  { path:'gencias', component: HomeComponent},
  { path:'turismo', component: HomeComponent},
  { path:'autonomo', component: HomeComponent},
  { path:'contato', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
