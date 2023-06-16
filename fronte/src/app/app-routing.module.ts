import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './ListaUsuarios/personas.component';
import { PersonaFormComponent } from './FormularioUsuarios/persona-form.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
const routes: Routes = [
  { path: '', redirectTo: '/personas', pathMatch: 'full' },
  { path: 'personas', component: PersonasComponent },
  { path: 'personas/add', component: PersonaFormComponent },
  { path: 'personas/edit/:id', component: PersonaFormComponent },
  { path: 'personas/editar/:id', component: EditarUsuarioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
