import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatPaginatorModule,
   MatTableModule,MatToolbarModule,MatInputModule
   ,MatButtonModule,    MatSortModule,MatDatepickerModule} from
   '@angular/material';
   import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { RegionsListComponent } from './regions-list/regions-list.component';
import { MatSelectModule } from '@angular/material/select';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ChunkNorrisComponent } from './chunk-norris/chunk-norris.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsListComponent,
    ListarClientesComponent,
    ClienteFormComponent,
    ChunkNorrisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
