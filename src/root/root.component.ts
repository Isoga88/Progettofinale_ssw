import { Component, OnInit } from '@angular/core';
import { AcquisizioneComponent } from './acquisizione/acquisizione.component';
import { RicercaComponent } from './ricerca/ricerca.component';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [RicercaComponent, AcquisizioneComponent],
  standalone: true,
})
export class RootComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
