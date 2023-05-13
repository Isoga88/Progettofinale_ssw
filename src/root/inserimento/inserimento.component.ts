import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../libro';
import { Archivio } from '../archivio';
import { DatabaseService } from '../database.service';
import { AjaxResponse } from 'rxjs/ajax';
@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class InserimentoComponent implements OnInit {
  @Input() visita: number;
  @Input() mioArchivio: Archivio;
  @Output() cambioVista = new EventEmitter<number>();
  @Output() doIndietro = new EventEmitter<number>();

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
    this.mioArchivio.aggiungiLibro(libretto);
    console.log(this.mioArchivio);
    this.db.submitData(this.mioArchivio.archivio).subscribe({
      next: (x: AjaxResponse<any>) => console.log(x.response),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  constructor(private db: DatabaseService) {}

  ngOnInit() {}
}
