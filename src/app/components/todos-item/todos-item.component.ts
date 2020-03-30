import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { todo } from '../../models/todos';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  @Input() output: todo;
  @Output() deleteTodo: EventEmitter<todo> = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

  }

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      output: true,
      'is-complete': this.output.completed
    }

    return classes;
  }

  //on toggle
  onToggle(output) {
    //toggle in ui
    output.completed = !output.completed;
    //toggle in server
    this.todoService.toggleCompleted(output).subscribe(output => console.log(output));
  }

  //on delete
  onDelete(output) {
    this.deleteTodo.emit(output);
  }
}
