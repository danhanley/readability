/**
 * Created by dan on 16/05/17.
 */
import { Injectable } from '@angular/core';
@Injectable()
export class ReadabilityScore {

  automated_readability_index  : string = 'Uncalculated';
  coleman_liau_index           : string;
  flesch_kincaid_grade_level   : string;
  flesch_kincaid_reading_ease  : string;
  gunning_fog_score            : string;
  smog_index                   : string;
  dale_chall_readability_score : string;
  difficult_words              : string;
  linsear_write_formula        : string;
  text_standard                : string;

}
