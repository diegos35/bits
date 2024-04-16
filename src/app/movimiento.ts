import { Cuenta } from './Cuenta';

export class Movimiento {
  id?: number;
  tipo: string;
  fecha: Date;
  valor: number;
  cuentaId?: number;

}
