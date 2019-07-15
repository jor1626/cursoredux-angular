import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NGRX
import { StoreModule } from "@ngrx/store";
import { contadorReducer } from './padre/contador.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './padre/hijo/hijo.component';
import { NietoComponent } from './padre/nieto/nieto.component';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({contador: contadorReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
