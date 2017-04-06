import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';

@Injectable()
export class ReadabilityService {

  automated_readability_index = "Uncalculated";
  coleman_liau_index          = "Uncalculated";
  flesch_kincaid_grade_level  = "Uncalculated";
  flesch_kincaid_reading_ease = "Uncalculated";
  gunning_fog_score           = "Uncalculated";
  smog_index                  = "Uncalculated";

  constructor(private jsonp: Jsonp) {}

  calculate_readability(ta) {
    console.log(ta.value);
    var text = new URLSearchParams();
    text.set('text', ta);
    return this.jsonp
      .get('http://???', { text })
      .toPromise()
      .then((response) => response.json()[1]);
  }

}
