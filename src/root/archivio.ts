import { Libro } from './libro';
export class Archivio {
  archivio: Array<Libro> = [];
  constructor() {}
  public aggiungiLibro(libro: Libro) {
    this.archivio.push(libro);
  }
}
