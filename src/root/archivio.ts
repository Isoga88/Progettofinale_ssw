import { Libro } from './libro';
import { DatabaseService } from './database.service';
import { AjaxResponse } from 'rxjs/ajax';

export class Archivio {
  archivio1: Array<Libro> = [];
  db: DatabaseService;
  constructor(db: DatabaseService) {
    this.db = db;
    this.db.getData().subscribe({
      next: (x: AjaxResponse<any>) => console.log(x.response),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  public aggiungiLibro(libro: Libro) {
    this.archivio1.push(libro);
  }
}
