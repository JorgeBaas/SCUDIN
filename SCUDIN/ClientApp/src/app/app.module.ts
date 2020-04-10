import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { InicioComponent } from './Paginas/Principal/inicio/inicio.component';
import { StoreModule } from '@ngrx/store';
import { UsuarioLogueado } from './reducers/Usuarios';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    FetchDataComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      usuarioLogueado : UsuarioLogueado
    })
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
