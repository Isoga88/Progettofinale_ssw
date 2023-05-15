import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../../libro';

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
  @Output() cambioVista = new EventEmitter<number>;

  cambiaVista(numero: number) {
    this.visita = numero;
    this.cambioVista.emit(this.visita);
  }
  titolo: string;
  autore: string;
  posizione: string;

  constructor() {}
  ngOnInit() {
    this.titolo = this.libroScelto.titolo;
    this.autore = this.libroScelto.autore;
    this.posizione = this.libroScelto.posizione;
  }
}
