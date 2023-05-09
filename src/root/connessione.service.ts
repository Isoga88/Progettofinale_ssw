import { Injectable } from '@angular/core';
import { Archivio } from './archivio';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root',
})
export class ConnessioneService {
  arch = [
    new Libro('Title', 'Author', 'posizion', 'prestit'),
    new Libro('Title2', 'Author2', 'posizion2', 'prestit2'),
    new Libro('Title3', 'Author3', 'posizion3', 'prestit3'),
  ];
  archivio = new Archivio();
  constructor() {}
  public aggiungiLibro(libro: Libro) {}
  public eliminaLibro(libro: Libro) {}
}
