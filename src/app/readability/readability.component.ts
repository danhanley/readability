import {Component, OnInit} from '@angular/core';
import {ReadabilityService} from '../readability.service';
import {ReadabilityScore} from '../readability.score';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-readability',
  templateUrl: './readability.component.html',
  styleUrls: ['./readability.component.css'],
  providers: [ReadabilityService, ReadabilityScore]
})
export class ReadabilityComponent  {

  private textStream = new Subject<string>();

  scoreObs: Observable<ReadabilityScore> = this.textStream
    .debounceTime(300)        // wait 300ms after each keystroke before considering the term
    .distinctUntilChanged()   // ignore if next search term is same as previous
    .switchMap(term => this.readabilityService.calculate_readability('{ "text" : "' + term + '" }'));

  private score: ReadabilityScore = new ReadabilityScore();

  private scoreSub;


  constructor(private readabilityService: ReadabilityService) {
    let self = this;
    this.scoreSub = this.scoreObs.subscribe(
      (next) => {
        //this.score = next['body'] as ReadabilityScore;
        self.score.automated_readability_index = next['body'].automated_readability_index;
        console.log(this.score.automated_readability_index);
      },
      (error) => {
        console.log("Er")
      })
  }

  // Push a piece of text into the observable stream.
  calculate_readability(text: string): void {
    console.log('Adding to stream: ' + text)
    this.textStream.next(text);
  }

}



