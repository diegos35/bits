import { CuentaService } from './../services/cuenta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chunk-norris',
  templateUrl: './chunk-norris.component.html',
  styleUrls: ['./chunk-norris.component.css']
})
export class ChunkNorrisComponent implements OnInit {

  chuckNorrisJoke: string;

  constructor(private cuentaService:CuentaService) { }

  ngOnInit(): void {
    this.getChuckNorrisJoke();
  }

  getChuckNorrisJoke() {
    this.cuentaService.getChunk()
    .subscribe(response => {
      this.chuckNorrisJoke = response.value;
    });
  }
}
