import { TestBed, async } from '@angular/core/testing';


import { AppComponent } from './app.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { ReadabilityComponent } from './readability/readability.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { ReadabilityService } from "./readability.service";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ReadabilityComponent,
        SentimentComponent
      ],
      providers: [ReadabilityService]
    }).compileComponents();
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Crownpeak Readability Checker'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Crownpeak Readability Checker');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Crownpeak Readability Checker');
  }));
});
