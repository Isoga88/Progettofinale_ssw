import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class ProvaService {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=74c74e23';
  constructor() {}
  public getData(): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.URL,
      crossDomain: true,
    });
  }
}
