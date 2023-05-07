import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ConnessioneService } from './connessione.service';
import { AcquisizioneComponent } from './acquisizione/acquisizione.component';

bootstrapApplication(AcquisizioneComponent);
