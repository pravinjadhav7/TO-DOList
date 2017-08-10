import { Injectable } from '@angular/core';
import {Todo} from './todo'

@Injectable()
export class TodoDataService {


  lastId: number = 0;  //for incrementing the id 

  todos:Todo[]=[]; // for placeholder todolist

  constructor() { }
  
  /** Function for add values in todo list / POST mentho */
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  /** Function for deleting value from todo list through according to the id /DELETE method */
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }


    /** update values from todo list /PUT menthod*/
   updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  /** GET all todo values  */
   getAllTodos(): Todo[] {
    return this.todos;
  }

  /** GET by id todo values */
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

   toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
