/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import  {Router, ActivatedRoute} from "@angular/router"

import { UserDetailsComponent } from './user-details.component';
import { Observable, of, Subject } from 'rxjs';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  class RouterStub{

    navigate(params){

    }
  }

  class ActivatedRouteStub{

    private subject=new Subject();


    push(value){
      this.subject.next(value);
    }

    get params(){
      return this.subject.asObservable();
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers:[
        {  provide:Router,useClass:RouterStub},{
          provide:ActivatedRoute,useClass:ActivatedRouteStub}
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call router navigate with users page on save', () => {
       let router=TestBed.get(Router);
       let spy=spyOn(router,"navigate");
      
       component.save();
       expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate to not foudn if id ==0', () => {
    let router=TestBed.get(Router);
    let spy=spyOn(router,"navigate");
    let route=TestBed.get(ActivatedRoute);
    route.push({id:0})
   
    
    expect(spy).toHaveBeenCalledWith(['not-found']);
});
});
