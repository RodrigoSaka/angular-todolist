import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '@shared/service';
import { provideIcons, NgIconComponent, provideNgIconsConfig } from '@ng-icons/core';
import { heroPencil } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HttpClientModule, CommonModule, NgIconComponent],
  providers: [TodoService, provideIcons({ heroPencil }), provideNgIconsConfig({ size: '0.83em' })]
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
