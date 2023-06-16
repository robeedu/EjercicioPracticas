import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './ListaUsuarios/personas.component';
import { PersonaFormComponent } from './FormularioUsuarios/persona-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { NavegacionComponent } from './navegacion/navegacion.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaFormComponent,
    EditarUsuarioComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
