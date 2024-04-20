import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIcons } from '@ng-icons/core';
import { heroPencil } from '@ng-icons/heroicons/outline';
import { Todo, TodoService } from '@shared/service';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let todosService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    TestBed.overrideComponent(AppComponent, {
      set: {
        providers: [{ provide: TodoService, useValue: { todos: () => of([]) } }, provideIcons({ heroPencil })]
      }
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    todosService = fixture.debugElement.injector.get(TodoService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should get todos', () => {
    const todos: Todo[] = [{ id: 1, title: 'Todo 1', completed: false }];

    jest.spyOn(todosService, 'todos').mockReturnValueOnce(of({ data: todos }));

    component.ngOnInit();

    expect(component.todos).toEqual(todos);
  });
});
