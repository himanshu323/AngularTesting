/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync ,tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Http, HttpModule } from '@angular/http';
import { of } from 'rxjs';


//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      imports:[HttpModule],
      providers:[TodoService],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  // it('should call the getTodos and set the todos property on initialization', () => {
    
  //   let service=TestBed.get(TodoService);

  //   spyOn(service,"getTodos").and.returnValue(of([1,2,3]));

  //   fixture.detectChanges();

  //   expect(component.todos).toEqual([1,2,3]);
  // });

  it('should call the getTodosPromise and set the todos property on initialization', fakeAsync(() => {
    
    let service=TestBed.get(TodoService);

    spyOn(service,"getTodosPromise").and.returnValue(Promise.resolve([1,2,3]));

    fixture.detectChanges();

    tick();

    expect(component.todos).toEqual([1,2,3]);

    // fixture.whenStable().then(()=>{
    //   expect(component.todos).toEqual([1,2,3]);
    // })
    
  }));
});
