import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Archivio } from '../archivio';
import { DatabaseService } from '../database.service';
import {VisualizzazioneComponent} from './visualizzazione/visualizzazione.component'
import { Libro } from '../libro';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone: true,
  imports: [CommonModule,VisualizzazioneComponent],
})
export class RicercaComponent implements OnInit {
  @Input() visita: number;
  @Input() mioArchivio: Archivio = new Archivio((this.db));
  @Output() cambioVista = new EventEmitter<number>;

  libroScelto : Libro
  cambiaVista(numero: number) {
    this.visita = numero;
    this.cambioVista.emit(this.visita);
  }
  occorrenze: number = 0;
  cercaLibro() {
    let libri = this.mioArchivio.archivio
    let nodoSequenza: HTMLInputElement = document.getElementById(
      'cerca'
    ) as HTMLInputElement;
    let sequenza = nodoSequenza.value;
    const libriCorrispondenti = libri.filter((libro) =>
      (libro.titolo + libro.autore).toLowerCase().includes(sequenza)
    );
    if (libriCorrispondenti.length === 1) {
      this.cambiaVista(3)
      this.libroScelto = libriCorrispondenti[0]      
    } else {
      this.occorrenze = libriCorrispondenti.length;
    }
  }
  constructor(private db: DatabaseService) {}

  ngOnInit() {}
}
