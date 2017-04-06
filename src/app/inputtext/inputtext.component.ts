import { Component, OnInit } from '@angular/core';
import {ReadabilityService} from '../readability.service';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent implements OnInit {

  ra:ReadabilityService;

  constructor(attrs: ReadabilityService) {
    this.ra = attrs;
  }

  ngOnInit() {
  }

}
