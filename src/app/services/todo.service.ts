import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
      .pipe(
        map((res: any) => res)
      );
  }
}
