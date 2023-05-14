import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizzazione',
  templateUrl: './visualizzazione.component.html',
  styleUrls: ['./visualizzazione.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class VisualizzazioneComponent implements OnInit {
  @Input() visita: number;
  constructor() {}

  ngOnInit() {}
}
