import { Injectable, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { todo } from "../models/todos";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class TodoService {
  todoUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todoLimit = "?_limit=10";
  constructor(private http: HttpClient) {}

  //To Get data from Server
  getTodo(): Observable<todo[]> {
    return this.http.get<todo[]>(`${this.todoUrl}${this.todoLimit}`);
  }

  //Delete Todo
  deleteTodo(del: todo): Observable<todo> {
    const url = `${this.todoUrl}/${del.id}`;
    return this.http.delete<todo>(url, httpOptions);
  }

  //Add Todo
  addTodo(add: todo): Observable<todo> {
    return this.http.post<todo>(this.todoUrl, add, httpOptions);
  }

  //To Send data
  toggleCompleted(dataIn: todo): Observable<any> {
    const url = `${this.todoUrl}/${dataIn.id}`;
    return this.http.put(url, dataIn, httpOptions);
  }
}
