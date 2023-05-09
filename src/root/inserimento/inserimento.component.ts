import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../libro';
import { Archivio } from '../archivio';
import { ConnessioneService } from '../connessione.service';
@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [ConnessioneService],
})
export class InserimentoComponent implements OnInit {
  @Input() visita: boolean;
  @Input() mioArchivio: ConnessioneService;
  @Output() cambioVista = new EventEmitter<boolean>();
  @Output() cambiaArchivio = new EventEmitter<Libro>();

  cambiaVista() {
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
  }

  constructor() {}

  ngOnInit() {}
}
