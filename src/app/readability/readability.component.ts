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
})
export class ReadabilityComponent  {

  constructor(private readabilityService: ReadabilityService) {  }

  private textStream = new Subject<string>();

  // Push a piece of text into the observable stream.
  calculate_readability(text: string): void {
    this.textStream.next(text);
  }

  scoreObs: Observable<ReadabilityScore> = this.textStream
    .debounceTime(300)        // wait 300ms after each keystroke before considering the term
    .distinctUntilChanged()   // ignore if next search term is same as previous
    .switchMap(term => this.readabilityService.calculate_readability('{ "text" : "' + term + '" }')
  );

}



