import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../libro';
import { Archivio } from '../archivio';
import { ConnessioneService } from '../connessione.service';
import { DatabaseService } from '../database.service';
import { AjaxResponse } from 'rxjs/ajax';
@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [ConnessioneService],
})
export class InserimentoComponent implements OnInit {
  @Input() visita: number;
  @Input() mioArchivio: ConnessioneService;
  @Output() cambioVista = new EventEmitter<number>();
  @Output() doIndietro = new EventEmitter<number>();
  @Output() cambiaArchivio = new EventEmitter<Libro>();

  cambiaVista(numero: number) {
    this.visita = numero;
    this.cambioVista.emit(this.visita);
  }
  inserisciDati() {
    var titolo: HTMLInputElement = document.getElementById(
      'titolo'
    ) as HTMLInputElement;
    var autore: HTMLInputElement = document.getElementById(
      'autore'
    ) as HTMLInputElement;
    var posizione: HTMLInputElement = document.getElementById(
      'posizione'
    ) as HTMLInputElement;
    const libretto = new Libro(
      titolo.value,
      autore.value,
      posizione.value,
      'no'
    );
    this.cambiaArchivio.emit(libretto);
    this.mioArchivio.archivio.aggiungiLibro(libretto);
    console.log(this.mioArchivio.archivio.archivio1);
    this.db.submitData(this.mioArchivio.archivio.archivio1).subscribe({
      next: (x: AjaxResponse<any>) => console.log(x.response),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  constructor(private db: DatabaseService) {}

  ngOnInit() {}
}
