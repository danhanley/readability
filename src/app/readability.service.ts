import { Injectable } from '@angular/core';


@Injectable()
export class ReadabilityService {

  automated_readability_index  = "Uncalculated";
  coleman_liau_index           = "Uncalculated";
  flesch_kincaid_grade_level   = "Uncalculated";
  flesch_kincaid_reading_ease  = "Uncalculated";
  gunning_fog_score            = "Uncalculated";
  smog_index                   = "Uncalculated";
  dale_chall_readability_score = "Uncalculated";
  difficult_words              = "Uncalculated";
  linsear_write_formula        = "Uncalculated";
  text_standard                = "Uncalculated";

  constructor() {}

  calculate_readability(ta) {
    var self = this;
    if (ta.value.length < 20)  return;
    //TODO really should make this non blocking, only call if input has changed, perhaps on a timer instead of by keyup?
    var oReq = new XMLHttpRequest();
    oReq.open("POST", 'https://xspbib9jgb.execute-api.eu-west-1.amazonaws.com/prod/readability',true);

    oReq.onload = function (e) {
      if (oReq.readyState === 4) {
        if (oReq.status === 200) {
          //console.log(oReq.responseText);
          var objs = JSON.parse(oReq.responseText);
          var body = objs['body'];
          //console.log(body);
          self.automated_readability_index  = body["automated_readability_index"];
          self.coleman_liau_index           = body["coleman_liau_index"];
          self.flesch_kincaid_grade_level   = body["flesch_kincaid_grade"];
          self.flesch_kincaid_reading_ease  = body["flesch_reading_ease"];
          self.gunning_fog_score            = body["gunning_fog"];
          self.smog_index                   = body["smog_index"];
          self.dale_chall_readability_score = body["dale_chall_readability_score"];
          self.difficult_words              = body["difficult_words"];
          self.linsear_write_formula        = body["linsear_write_formula"];
          self.text_standard                = body["text_standard"];
        } else {
          console.error(oReq.statusText);
        }
      }
    };
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send('{ "text" : "' + ta.value + '" }');

  }

}
