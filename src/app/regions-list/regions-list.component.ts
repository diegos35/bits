import { Cuenta } from './../Cuenta';
import { Movimiento } from './../movimiento';
import { Component, OnInit } from "@angular/core";
  import { ActivatedRoute, Router } from '@angular/router';
import { CuentaService } from '../services/cuenta.service';
import { MovimientoService } from '../services/movimiento.service';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {

  cuentas: Cuenta[];
  clientesFiltrados: Cuenta[];
  searchQueryAccount: string = '';
  editable = false;
  crearMovimientoActivo = false;
  movimientosVisibles=false;
  addAccount= false;
  nuevoMovimiento: Movimiento = {
    tipo: 'DEBITO',
    fecha: new Date,
    valor: 0
  };;
  movimientosByCuenta: Movimiento[];
  numeroCuenta:Cuenta
  clienteId:number;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cuentaService: CuentaService,
    private movimientoService: MovimientoService
  )
   { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.clienteId = +params['id'];
        this.loadAccount();
      }
    });
  }

  loadAccount(){
    this.cuentaService.getAccountById(this.clienteId)
          .subscribe(cuenta => this.cuentas = cuenta);
  }

  editarCuenta(cuenta: Cuenta): void {
    this.editable = true;
  }

  guardarCuenta(cuenta: Cuenta): void {
    if(this.editable){
      this.editable = false;
      this.cuentaService.updateCuenta(cuenta.id, cuenta)
      .subscribe (() => {
        console.log('Cuenta actualizada correctamente.');
      },
      error => {
        console.error('Error al actualizar la cuenta:', error);
      }
    );
    }else{
      const cuentaObj = {
        numero: cuenta,
        cliente: {
          id: this.clienteId
        }
      };
      this.cuentaService.createCuenta(cuentaObj).subscribe(
        () => {
          console.log('Cuenta creada correctamente');
          this.loadAccount();
        },
        error => {
          console.error('Error al crear la cuenta:', error);
        }
      );
    }

  }

  eliminarCuenta(id: number): void {
    this.cuentaService.deleteCliente(id)
    .subscribe(() => {
      this.cuentas = this.cuentas.filter(cuenta => cuenta.id !== id);
    });
  }

  crearMovimiento(cuenta: Cuenta): void {
    this.crearMovimientoActivo = true;
    this.movimientosVisibles = false;
    this.nuevoMovimiento.cuentaId = cuenta.id;
  }

  guardarMovimiento(): void {
    this.crearMovimientoActivo = false;
    console.log(this.nuevoMovimiento)
    this.movimientoService.agregarMovimiento(this.nuevoMovimiento)
    .toPromise()
    .then((respuesta) => {
      console.log('Movimiento agregado correctamente:', respuesta);
      alert('Movimiento agregado correctamente');
    })
    .catch((error) => {
      console.error('Error al agregar el movimiento:', error);
      let errorMessage = 'Error al agregar el movimiento: ';
      if (error.error && typeof error.error === 'string') {
        errorMessage += error.error;
      } else {
        errorMessage += JSON.stringify(error.error);
      }
      alert(errorMessage);
    });
  }


  listarMovimiento(CuentaId: number){
    this.movimientosVisibles = true;
    this.movimientoService.obtenerMovimientosPorCuentaId(CuentaId)
      .subscribe((movimientos: Movimiento[]) => {
        this.movimientosByCuenta = movimientos;
        console.log(movimientos);
      });
  }


  filterAccount() {
    if (this.searchQueryAccount.length >= 3) {
      const query = this.searchQueryAccount.toLowerCase();
      if (this.cuentas) {
        this.cuentas = this.cuentas.filter(account => {
          const numero = `${account.numero}`;
          return numero.includes(query);
        });
      }
    }
  }

  agregarCuenta(){
    this.addAccount = true;
  }


}
