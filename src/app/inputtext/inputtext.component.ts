import { Component, OnInit } from '@angular/core';
import {ReadabilityComponent} from '../readability/readability.component';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css'],
  providers: [ReadabilityComponent]
})
export class InputtextComponent implements OnInit {

  rc: ReadabilityComponent;

  constructor(rc: ReadabilityComponent) { this.rc = rc}

  ngOnInit() {
  }

}
