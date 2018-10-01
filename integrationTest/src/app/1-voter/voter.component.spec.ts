import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {

  let component:VoterComponent;
  let fixture:ComponentFixture<VoterComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations:[VoterComponent]
    });

   fixture= TestBed.createComponent(VoterComponent);
   component=fixture.componentInstance;
  });

  it('Should dispaly the total Votes in the Template', () => {

    component.othersVote=21;
    component.myVote=1;

    fixture.detectChanges();

    let de=fixture.debugElement.query(By.css(".vote-count"))

    let el:HTMLElement=de.nativeElement;

    expect(el.innerText).toBe("22");
  });

  it("Should apply the class highlighted if upvoted",()=>{

    component.myVote=1;

    fixture.detectChanges();

    let de=fixture.debugElement.query(By.css(".glyphicon-menu-up"));

    expect(de.classes['highlighted']).toBeTruthy();


  })

  it("Should increment the upvote on click",()=>{

    let de=fixture.debugElement.query(By.css(".glyphicon-menu-up"));

    de.triggerEventHandler('click',null);

    expect(component.myVote).toBe(1);
  })
});
