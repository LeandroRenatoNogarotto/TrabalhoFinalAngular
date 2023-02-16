import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardMetaComponent } from './card-meta/card-meta.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    CardMetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
