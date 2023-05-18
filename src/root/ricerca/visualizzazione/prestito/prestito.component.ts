import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatabaseService } from '../../../database.service';
import { Archivio } from '../../../archivio';
import { Libro } from '../../../libro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PrestitoComponent implements OnInit {
  @Input() visita: number;
  @Input() libroScelto: Libro;
  @Input() mioArchivio: Archivio = new Archivio(this.db);
  @Output() cambioPrestito = new EventEmitter<string>;
  @Output() cambioVista = new EventEmitter<number>;


  cambiaVista(numero: number) {
    this.visita = numero;
    this.cambioVista.emit(this.visita);
  }
  doPrestito() {
    var nomePrestito: HTMLInputElement = document.getElementById(
      'nomePrestito'
    ) as HTMLInputElement;
    this.mioArchivio.prestaLibro(this.libroScelto, nomePrestito.value);
    this.cambioPrestito.emit(nomePrestito.value)

    this.cambiaVista(2)
  }
  doResto() {
    this.mioArchivio.prestaLibro(this.libroScelto, 'undefined');
    this.cambiaVista(2)
    this.cambioPrestito.emit('undefined')

  }
  
  constructor(private db: DatabaseService) {}

  ngOnInit() {
  }
}
