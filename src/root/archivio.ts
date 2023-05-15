import { Libro } from './libro';
import { DatabaseService } from './database.service';
import { AjaxResponse } from 'rxjs/ajax';

export class Archivio {
  archivio: Array<Libro> = [];
  db: DatabaseService;
  constructor(db: DatabaseService) {
    this.db = db;
    this.db.getData().subscribe({
      next: (x: AjaxResponse<any>) => (this.archivio = JSON.parse(x.response)),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  public aggiungiLibro(libro: Libro) {
    this.archivio.push(libro);
    this.db.submitData(this.archivio).subscribe({
      next: (x: AjaxResponse<any>) => console.log(x.response),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  public eliminalibro(libro: Libro) {
    const filteredArray = this.archivio.filter(
      (item) => item.titolo !== libro.titolo
    );
    this.db.submitData(filteredArray).subscribe({
      next: (x: AjaxResponse<any>) => console.log(x.response),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
