import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegionsListComponent } from './regions-list/regions-list.component';
import {ListarClientesComponent}from './listar-clientes/listar-clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const routes: Routes = [
  {path:"clients", component: ListarClientesComponent},
  {path:"nuevo-cliente", component: ClienteFormComponent},
  {path:"editar-cliente/:id", component: ClienteFormComponent},
  {path:"detalle-cuenta/:id", component: RegionsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
