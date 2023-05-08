import { Component, OnInit } from '@angular/core';
import { AcquisizioneComponent } from './acquisizione/acquisizione.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [CommonModule, RicercaComponent, AcquisizioneComponent],
  standalone: true,
})
export class RootComponent implements OnInit {
  visita: boolean = true;
  constructor() {}

  ngOnInit() {}
}
