import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RicercaComponent implements OnInit {
  @Input() visita: number;
  @Output() cambioVista = new EventEmitter<number>();
  cambiaVista(numero: number) {
    this.visita = numero;
    this.cambioVista.emit(this.visita);
  }
  occorrenze: number = 0;
  libri = [
    {
      titolo: 'rgfygrur',
      autore: 'uiwrhui',
      posizione: 'iurugui',
      prestito: 'no',
    },
    {
      titolo: 'uihrui',
      autore: 'urh',
      posizione: 'iuruguiuihg',
      prestito: 'no',
    },
    {
      titolo: 'uihrui',
      autore: 'urghu',
      posizione: 'iuruguiuihg',
      prestito: 'no',
    },
  ];
  cercaLibro() {
    let nodoSequenza: HTMLInputElement = document.getElementById(
      'cerca'
    ) as HTMLInputElement;
    let sequenza = nodoSequenza.value;
    const libriCorrispondenti = this.libri.filter((libro) =>
      (libro.titolo + libro.autore).toLowerCase().includes(sequenza)
    );

    if (libriCorrispondenti.length === 1) {
      console.log(libriCorrispondenti);
    } else {
      this.occorrenze = libriCorrispondenti.length;
      console.log(libriCorrispondenti.length);
    }
  }
  constructor() {}

  ngOnInit() {}
}
