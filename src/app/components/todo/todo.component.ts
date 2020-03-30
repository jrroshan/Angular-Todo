import { Component, OnInit } from '@angular/core';
import { todo } from '../../models/todos';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(getDataFromServer => {
      this.todos = getDataFromServer;
    });
  }

  deleteTodo(del: todo) {
    console.log('delete me');
  }

}
