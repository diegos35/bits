import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[];
  clientesFiltrados: Cliente[];
  searchQuery: string = '';

  constructor(private router: Router, private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clienteService.getAllClientes()
      .subscribe(clientes => this.clientes = clientes);
  }


  eliminarCliente(id: number): void {
    this.clienteService.deleteCliente(id)
      .subscribe(() => {
        this.clientes = this.clientes.filter(cliente => cliente.id !== id);
      });
  }


  editarCliente(id: number): void {
    this.router.navigate(['/editar-cliente', id]);
  }


  agregarCliente(): void {
    this.router.navigate(['/nuevo-cliente']);
  }


  filterUsers() {
    if (this.searchQuery.length >= 3) {
      const query = this.searchQuery.toLowerCase();
      if (this.clientes) {
        this.clientes = this.clientes.filter(client => {
          const name = `${client.nombre}`.toLowerCase();
          return name.includes(query) || client.telefono.includes(query)
            || client.direccion.toLowerCase().includes(query) ;
        });
      }
    }else{
      this.obtenerClientes();
    }
  }

  verDetalleCuenta(id: number): void {
    this.router.navigate(['/detalle-cuenta', id]);
  }
}
