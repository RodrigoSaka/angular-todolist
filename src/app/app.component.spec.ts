import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Todo, TodoService } from '@shared/service';
import { of } from 'rxjs';

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
        providers: [{ provide: TodoService, useValue: { todos: () => of([]) } }]
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
    const todos: Todo[] = [{ id: 1, userId: 2, title: 'Todo 1', completed: false }];

    jest.spyOn(todosService, 'todos').mockReturnValueOnce(of(todos));

    component.ngOnInit();

    expect(component.todos).toEqual(todos);
  });
});
