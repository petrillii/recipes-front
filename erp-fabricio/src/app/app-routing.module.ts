import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'about', component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
