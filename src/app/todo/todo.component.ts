import { Component, OnInit } from '@angular/core';
import {Itodo} from '../itodo';
import { FormControl } from '@angular/forms';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Itodo[] = [];
  inputControl = new FormControl();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodo().subscribe(data => {
      this.todoList = data;
    });
  }
  toggleTodo(i) {}
  deleteTodo(i) {
    const todo = this.todoList[i];
    this.todoService.deleteTodo(todo.id).subscribe(function() {
      this.todoList = this.todoList.filter(data => data.id !== todo.id);
    });
  }
  addTodo() {
    const title = this.inputControl.value;
    const newTodo: Partial<Itodo> = {
      title: this.inputControl.value,
      complete: false
    };
    this.todoService.createTodo(newTodo).subscribe(next => {
      this.todoList.unshift(next);
      this.inputControl.setValue('');
    });
  }


}
