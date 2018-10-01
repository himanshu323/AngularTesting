import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component=new TodoFormComponent(new FormBuilder());
  });

  it('contains name and email controls', () => {

    expect(component.form.contains("name")).toBeTruthy();

    expect(component.form.contains("email")).toBeTruthy();
  });

  it('name is required', () => {

    let name=component.form.get("name");

    name.setValue("");

    expect(component.form.valid).toBeFalsy();
  });
});