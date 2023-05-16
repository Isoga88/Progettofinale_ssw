import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../../../database.service';
import { Archivio } from '../../../archivio';
import { Libro } from '../../../libro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PrestitoComponent implements OnInit {
  @Input() libroScelto: Libro;
  @Input() mioArchivio: Archivio = new Archivio(this.db);
  doPrestito() {
    var nomePrestito: HTMLInputElement = document.getElementById(
      'nomePrestito'
    ) as HTMLInputElement;
    this.mioArchivio.prestaLibro(this.libroScelto, nomePrestito.value);
  }
  constructor(private db: DatabaseService) {}

  ngOnInit() {}
}
