import { Component, OnInit, Output } from '@angular/core';
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
    //Remove From UI
    this.todos = this.todos.filter(t => t.id !== del.id);
    //Remove from Server
    this.todoService.deleteTodo(del).subscribe();
  }

}
