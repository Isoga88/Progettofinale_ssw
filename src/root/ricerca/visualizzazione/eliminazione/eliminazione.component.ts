import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Archivio } from '../../../archivio';
import { DatabaseService } from '../../../database.service';
import { Libro } from '../../../libro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminazione',
  templateUrl: './eliminazione.component.html',
  styleUrls: ['./eliminazione.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class EliminazioneComponent implements OnInit {
  @Input() visita: number;
  @Input() libroScelto: Libro;
  @Input() mioArchivio: Archivio = new Archivio(this.db);
  @Output() cambioVista = new EventEmitter<number>;
  cambiaVista(numero: number) {
    this.visita = numero;
    this.cambioVista.emit(this.visita);
  }
  rimuoviLibro() {
    this.mioArchivio.eliminalibro(this.libroScelto);
    this.cambiaVista(0)
  }
  constructor(private db: DatabaseService) {}

  ngOnInit() {}
}
