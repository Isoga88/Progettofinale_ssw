import { Component, Input, OnInit } from '@angular/core';
import { Archivio } from '../../../archivio';
import { DatabaseService } from '../../../database.service';
import { Libro } from '../../../libro';

@Component({
  selector: 'app-eliminazione',
  templateUrl: './eliminazione.component.html',
  styleUrls: ['./eliminazione.component.css'],
  standalone: true,
})
export class EliminazioneComponent implements OnInit {
  @Input() libroScelto: Libro;
  @Input() mioArchivio: Archivio = new Archivio(this.db);

  rimuoviLibro() {
    this.mioArchivio.eliminalibro(this.libroScelto);
  }
  constructor(private db: DatabaseService) {}

  ngOnInit() {}
}
