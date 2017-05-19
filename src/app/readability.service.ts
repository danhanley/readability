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
      .map((r) => {
            let responseObject = r.json()['body'];
            let readability: ReadabilityScore = new ReadabilityScore();
            //Surely these is an easier way to parse this instead of enumerating everything?
            readability.automated_readability_index     = responseObject['automated_readability_index'];
            readability.coleman_liau_index              = responseObject['coleman_liau_index'];
            readability.flesch_kincaid_grade_level      = responseObject['flesch_kincaid_grade'];
            readability.flesch_kincaid_reading_ease     = responseObject['flesch_reading_ease'];
            readability.gunning_fog_score               = responseObject['gunning_fog'];
            readability.smog_index                      = responseObject['smog_index'];
            readability.dale_chall_readability_score    = responseObject['dale_chall_readability_score'];
            readability.difficult_words                 = responseObject['difficult_words'];
            readability.linsear_write_formula           = responseObject['linsear_write_formula'];
            readability.text_standard                   = responseObject['text_standard'];
         console.log("From server:");
        console.log(responseObject);
        console.log(readability);
        return readability;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
