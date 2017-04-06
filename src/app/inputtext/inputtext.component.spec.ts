import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReadabilityService} from "../readability.service";

import { InputtextComponent } from './inputtext.component';

describe('InputtextComponent', () => {
  let component: InputtextComponent;
  let fixture: ComponentFixture<InputtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputtextComponent ],
      providers: [ReadabilityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
