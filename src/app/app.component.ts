import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//referencia del componente la llamamos en html
  templateUrl: './app.component.html', //estructura de html del componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Merged'; //variable
  //botonstatus=true; //boton activado
//FUNCION QUE RETORNA LA VARIABLE
 // getTitulo(){
   // return this.title;
  //}


}
