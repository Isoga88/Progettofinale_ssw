import { Injectable } from '@angular/core';
import { Archivio } from './archivio';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root',
})
export class ConnessioneService {
  archivio = new Archivio();
  constructor() {
    this.archivio.aggiungiLibro(
      new Libro('Title', 'Author', 'posizion', 'prestit')
    );
    this.archivio.aggiungiLibro(
      new Libro('Title2', 'Author2', 'posizion2', 'prestit2')
    );
    this.archivio.aggiungiLibro(
      new Libro('Title3', 'Author3', 'posizion3', 'prestit3')
    );
  }
  public aggiungiLibro(libro: Libro) {
    this.archivio.aggiungiLibro(libro);
  }
  public eliminaLibro(libro: Libro) {}
}
