import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, of, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service:TodoService;

  beforeEach(() => {
    service=new TodoService(null);

    component=new TodosComponent(service);

  });

  it('should set the todos property on Component Initialize', () => {

    spyOn(service,'getTodos').and.callFake(()=>{

      return of([1,2,3]);
    })

    component.ngOnInit();

   

    expect(component.todos).toEqual([1,2,3]);
  });


  it("should call the add method from service on Add()",()=>{

   let spy= spyOn(service,"add").and.returnValue(of());

   component.add();

   expect(spy).toHaveBeenCalled();


  })

  it("should set the Todos property returned from service on Add()",()=>{

    let todo=99;
    let spy= spyOn(service,"add").and.returnValue(of(99,109));
 
    component.add();
 
    expect(component.todos).toContain(109);
    
 
 
   })

   it("should set the message property returned from service in case of Errors",()=>{

    let error="Error Message";
    let spy= spyOn(service,"add").and.returnValue(throwError(error));
 
    component.add();
 
    expect(component.message).toBe(error);
    
 
 
   })

   it("should call delete if the user confirms",()=>{

    spyOn(window,"confirm").and.returnValue(true);

    let spy=spyOn(service,"delete").and.returnValue(of());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);


   })

   it("should not call delete if the user rejects",()=>{

    spyOn(window,"confirm").and.returnValue(false);

    let spy=spyOn(service,"delete").and.returnValue(of());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();

    
   })
});