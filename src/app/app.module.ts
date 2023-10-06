import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BottombarComponent } from './components/widgets/bottombar/bottombar.component';
import { TopbarComponent } from './components/widgets/topbar/topbar.component';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { ResultadoComponent } from './components/login/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BottombarComponent,
    TopbarComponent,
    MainscreenComponent,
    ResultadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
