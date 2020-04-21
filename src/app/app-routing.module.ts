import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
 // { path: 'home', canActivate: [AuthGuard], component: HomeComponent,
//    children: [
  //    { path: 'misequipos', component: MisEquiposComponent },
    //  { path: 'relaciones', component: RelationsComponent },
      //{ path: '', redirectTo: 'misequipos', pathMatch: 'full' },
    //]},
 // { path: 'perfil/:id', canActivate: [AuthGuard], component: ProfileComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
