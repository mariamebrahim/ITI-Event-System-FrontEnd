import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './student/register/register.component';

const routes: Routes = [
   {path:"login",component:LoginComponent},
   {path:"home",component:HomeComponent},
   {path:"register",component:RegisterComponent},
   {path:"",redirectTo:"home",pathMatch:"full"},//3shan lw el path kan fady yktbo how w ywdeny
   {path:"**",component:NotFoundComponent},//lw 3atetlo path b 5laf ay 7aga mawgoda 3andy

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
