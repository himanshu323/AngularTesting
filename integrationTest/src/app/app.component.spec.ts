/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterOutlet, RouterLink, RouterLinkWithHref } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports:[RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it("test it contains router-outlet",()=>{

      let de=fixture.debugElement.query(By.directive(RouterOutlet));
      expect(de).not.toBeNull();
  })

  it("should contain router link with todo",()=>{

   let des= fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

   let index=des.findIndex(de=>de.properties['href']=="/todos");

   expect(index).toBeGreaterThan(-1);


  })
});
