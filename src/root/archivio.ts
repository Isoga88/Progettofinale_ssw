import { DatabaseService } from './database.service';
import { Libro } from './libro';
import { DatabaseService } from '../database.service';

export class Archivio {
  archivio1: Array<Libro> = [];
  
  constructor() {}
  public aggiungiLibro(libro: Libro) {
    this.archivio1.push(libro);
  }
}
