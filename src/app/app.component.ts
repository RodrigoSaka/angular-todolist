import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo, TodoService } from '@shared/service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos() {
    this.todoService.todos().subscribe(({ data }) => {
      this.todos = data;
    });
  }
}
