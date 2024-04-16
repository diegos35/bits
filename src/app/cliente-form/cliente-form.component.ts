import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClientesService } from '../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente = { nombre: '', direccion: '', telefono: '' };
  editar: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const clienteId: number = +params['id'];
        this.editar = true;
        this.clienteService.getClienteById(clienteId)
          .subscribe((cliente: Cliente) => {
            this.cliente = cliente;
          });
      }
    });
  }

  guardarCliente(): void {
   if (this.editar) {
      this.clienteService.updateCliente(this.cliente.id,this.cliente)
        .subscribe(() => {
          this.router.navigate(['/clients']);
        });
    } else {
      this.clienteService.createCliente(this.cliente)
        .subscribe(() => {
          this.router.navigate(['/clients']);
        });
    }
  }
}
