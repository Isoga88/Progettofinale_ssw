import { Component, OnInit } from '@angular/core';
import { ConnessioneService } from '../connessione.service';

@Component({
  selector: 'app-acquisizione',
  templateUrl: './acquisizione.component.html',
  styleUrls: ['./acquisizione.component.css'],
  standalone: true,
  providers: [ConnessioneService],
})
export class AcquisizioneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
