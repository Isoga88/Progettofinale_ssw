import { Libro } from './libro';
export class Archivio {
  archivio: Array<Libro>;
  constructor(archivio: Array<Libro>) {
    this.archivio = archivio;
  }
  public aggiungiLibro(libro: Libro) {
    this.archivio.push(libro);
  }
  public eliminaLibro(libro: Libro) {}
}
