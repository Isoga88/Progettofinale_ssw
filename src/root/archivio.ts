import { Libro } from './libro';
export class Archivio {
  archivio1: Array<Libro> = [];
  constructor() {}
  public aggiungiLibro(libro: Libro) {
    this.archivio1.push(libro);
  }
}
