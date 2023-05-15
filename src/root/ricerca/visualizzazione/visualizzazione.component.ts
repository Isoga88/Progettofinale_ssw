import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../../libro';
import { Archivio } from '../../archivio';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-visualizzazione',
  templateUrl: './visualizzazione.component.html',
  styleUrls: ['./visualizzazione.component.css'],
  standalone: true,
  imports: [CommonModule],
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
  rimuoviLibro(){
    this.mioArchivio.eliminalibro(this.libroScelto)
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
}
