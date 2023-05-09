import { Component, OnInit } from '@angular/core';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { CommonModule } from '@angular/common';
import { Archivio } from './archivio';
import { Libro } from './libro';
import { ConnessioneService } from './connessione.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [CommonModule, RicercaComponent, InserimentoComponent],
  standalone: true,
  providers: [ConnessioneService],
})
export class RootComponent implements OnInit {
  visita: number = 0;
  mioArchivio = new ConnessioneService();
  cambiaArchivio(libretto: Libro) {
    console.log(libretto);
    this.mioArchivio.aggiungiLibro(libretto);
    console.log(this.mioArchivio);
  }
  constructor() {}

  ngOnInit() {}
}
