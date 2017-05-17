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

  score: ReadabilityScore = new ReadabilityScore();

  scoreSub = this.scoreObs.subscribe(
    (next) => {
      this.score = next['body'] as ReadabilityScore;
      console.log(this.score);
    },
    (error) => {
      console.log("Er")
  })


  constructor(private readabilityService: ReadabilityService) {

  }

  // Push a piece of text into the observable stream.
  calculate_readability(text: string): void {
    console.log('Adding to stream: ' + text)
    this.textStream.next(text);
  }

}



