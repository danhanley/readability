import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ReadabilityScore } from './readability.score';

@Injectable()
export class ReadabilityService {
  constructor(private http: Http) { }

  calculate_readability(text: string) : Observable<ReadabilityScore> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(`https://xspbib9jgb.execute-api.eu-west-1.amazonaws.com/prod/readability`, text, options)
      .map(r => r.json()['body'] as ReadabilityScore)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
