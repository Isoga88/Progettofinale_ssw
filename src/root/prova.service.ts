import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class ProvaService {
  boh: Array<object> = [
    { id: 1, nome: 'Oggetto 1' },
    { id: 2, nome: 'Oggetto 2' },
  ];
  URLget: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/' +
    'get' +
    '?key=74c74e23';
  URLset: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/' +
    'set' +
    '?key=74c74e23';
  constructor() {}
  public getData(): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.URLget,
      crossDomain: true,
    });
  }
  // Converti l'array in formato JSON
  public submitData(): Observable<AjaxResponse<any>> {
    const data = JSON.stringify(this.boh);
    return ajax({
      method: 'POST',
      url: this.URLset,
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
  }
}
