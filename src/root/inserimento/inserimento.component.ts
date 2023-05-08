import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class InserimentoComponent implements OnInit {
  @Input() visita: boolean;
  @Output() cambioVista = new EventEmitter<boolean>();

  cambiaVista() {
    this.visita = !this.visita;
    this.cambioVista.emit(this.visita);
  }
  constructor() {}

  ngOnInit() {}
}
