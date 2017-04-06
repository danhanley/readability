import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadabilityService } from "../readability.service";
import { ReadabilityComponent } from './readability.component';


describe('ReadabilityComponent', () => {

  let component: ReadabilityComponent;
  let fixture: ComponentFixture<ReadabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadabilityComponent ],
      providers: [ReadabilityService, ReadabilityComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ReadabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show labels and scores', () => {
    //const fixture = TestBed.createComponent(ReadabilityComponent);
    //fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul > li:nth-child(1)').textContent).toContain('Automated Readability Index', "Show the Label");
    expect(compiled.querySelector('ul > li:nth-child(1) > div').textContent).toMatch(/Uncalculated|[0-9]+/, "Value should be 'Uncalculated' or an integer");
    expect(compiled.querySelector('ul > li:nth-child(2)').textContent).toContain('Coleman Liau Index', "Show the Label");
    expect(compiled.querySelector('ul > li:nth-child(2) > div').textContent).toMatch(/Uncalculated|[0-9]+/, "Value should be 'Uncalculated' or an integer");
    expect(compiled.querySelector('ul > li:nth-child(3)').textContent).toContain('Flesch Kincaid Grade Level', "Show the Label");
    expect(compiled.querySelector('ul > li:nth-child(3) > div').textContent).toMatch(/Uncalculated|[0-9]+/, "Value should be 'Uncalculated' or an integer");
    expect(compiled.querySelector('ul > li:nth-child(4)').textContent).toContain('Flesch Kincaid Reading Ease', "Show the Label");
    expect(compiled.querySelector('ul > li:nth-child(4) > div').textContent).toMatch(/Uncalculated|[0-9]+/, "Value should be 'Uncalculated' or an integer");
    expect(compiled.querySelector('ul > li:nth-child(5)').textContent).toContain('Gunning Fog Score', "Show the Label");
    expect(compiled.querySelector('ul > li:nth-child(5) > div').textContent).toMatch(/Uncalculated|[0-9]+/, "Value should be 'Uncalculated' or an integer");
    expect(compiled.querySelector('ul > li:nth-child(6)').textContent).toContain('SMOG Index', "Show the Label");
    expect(compiled.querySelector('ul > li:nth-child(6) > div').textContent).toMatch(/Uncalculated|[0-9]+/, "Value should be 'Uncalculated' or an integer");
  });

});
