/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });

  it("should display with cyan for first para",()=>{

   let de= fixture.debugElement.queryAll(By.directive(HighlightDirective))[0];
  let el:HTMLElement=de.nativeElement;
   expect(el.style.backgroundColor).toBe('cyan');
  })

  it("should display with default for second para",()=>{

    let de= fixture.debugElement.queryAll(By.directive(HighlightDirective))[1];
   let el:HTMLElement=de.nativeElement;
   let directive=de.injector.get(HighlightDirective);
    expect(el.style.backgroundColor).toBe(directive.defaultColor);
   })
});
