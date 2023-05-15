import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../../libro';
import { Archivio } from '../../archivio';
import { DatabaseService } from '../../database.service';
import {EliminazioneComponent} from './eliminazione/eliminazione.component';
import {PrestitoComponent} from './prestito/prestito.component';


@Component({
  selector: 'app-visualizzazione',
  templateUrl: './visualizzazione.component.html',
  styleUrls: ['./visualizzazione.component.css'],
  standalone: true,
  imports: [CommonModule, EliminazioneComponent,PrestitoComponent],
})
export class VisualizzazioneComponent implements OnInit {
  @Input() visita: number;
  @Input() libroScelto: Libro;
  @Input() mioArchivio: Archivio = new Archivio((this.db));
  @Output() cambioVista = new EventEmitter<number>;
  cambiaVista(numero: number) {
    this.visita = numero;
    this.cambioVista.emit(this.visita);
  }

  titolo: string;
  autore: string;
  posizione: string;

  constructor( private db: DatabaseService) {}
  ngOnInit() {
    this.titolo = this.libroScelto.titolo;
    this.autore = this.libroScelto.autore;
    this.posizione = this.libroScelto.posizione;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.libroScelto) {
      this.autore = changes.libroScelto.currentValue.autore;
      this.titolo = changes.libroScelto.currentValue.titolo;
      console.log(changes.libroScelto.currentValue)
      this.posizione = changes.libroScelto.currentValue.posizione;
    }
  }
}
