import { Injectable } from '@angular/core';
import { Archivio } from './archivio';
import { Libro } from './libro';

@Injectable()
export class ConnessioneService {
  archivio: Array<Libro>;
  constructor(archivio: Array<Libro>) {
    this.archivio = archivio;
    archivio = [
      new Libro('Title', 'Author', 'posizion', 'prestit'),
      new Libro('Title2', 'Author2', 'posizion2', 'prestit2'),
      new Libro('Title3', 'Author3', 'posizion3', 'prestit3'),
    ];
    new Archivio(archivio);
  }
}
