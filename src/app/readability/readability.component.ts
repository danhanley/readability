import {Component, OnInit} from '@angular/core';
import {ReadabilityService} from '../readability.service';


@Component({
  selector: 'app-readability',
  templateUrl: './readability.component.html',
  styleUrls: ['./readability.component.css']
})
export class ReadabilityComponent implements OnInit {

  ra:ReadabilityService;

  constructor(attrs: ReadabilityService) {
      this.ra = attrs;
  }

  ngOnInit() {
  }

}
