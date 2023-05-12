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
  occorrenze: number
  
  constructor() {}

  ngOnInit() {}
}
