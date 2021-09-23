import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 6462db33e36729885cce6cb9341c061f8367938a

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    HomeComponent
>>>>>>> 6462db33e36729885cce6cb9341c061f8367938a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
