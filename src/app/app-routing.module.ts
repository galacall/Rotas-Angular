import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { ResultadoComponent } from './components/login/resultado/resultado.component';

const routes: Routes = [
  { path: '', component: MainscreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginefetuado', component: ResultadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
