/**
 * Created by dan on 16/05/17.
 */
import { Injectable } from '@angular/core';
@Injectable()
export class ReadabilityScore {

  automated_readability_index  : string = 'Uncalculated';
  coleman_liau_index           : string = 'Uncalculated';
  flesch_kincaid_grade_level   : string = 'Uncalculated';
  flesch_kincaid_reading_ease  : string = 'Uncalculated';
  gunning_fog_score            : string = 'Uncalculated';
  smog_index                   : string = 'Uncalculated';
  dale_chall_readability_score : string = 'Uncalculated';
  difficult_words              : string = 'Uncalculated';
  linsear_write_formula        : string = 'Uncalculated';
  text_standard                : string = 'Uncalculated';

}
