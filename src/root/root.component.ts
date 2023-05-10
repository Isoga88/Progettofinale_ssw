import { Component, OnInit } from '@angular/core';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { CommonModule } from '@angular/common';
import { Archivio } from './archivio';
import { Libro } from './libro';
import { ConnessioneService } from './connessione.service';
import { ProvaService } from './prova.service';
import { AjaxResponse } from 'rxjs/ajax';

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
  cambiaVista(numero: number) {
    this.visita = numero;
  }
  cambiaArchivio(libretto: Libro) {
    console.log(libretto);
    this.mioArchivio.aggiungiLibro(libretto);
    console.log(this.mioArchivio.archivio.archivio1);
  }
  funzione() {
    this.ws.getData().subscribe({
      next: (x: AjaxResponse<any>) => console.log(x.response),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  constructor(private ws: ProvaService) {}

  ngOnInit() {}
}
