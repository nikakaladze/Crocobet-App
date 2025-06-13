import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ApiInfo } from '../core/api-info';
import { Observable, shareReplay, switchMap } from 'rxjs';
import { ITodo } from '../core/models';

@Component({
  selector: 'app-todos',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class Todos {
  private apiInfo = inject(ApiInfo);
  public id = input.required<number>();
  private todos$: Observable<ITodo[]> = toObservable(this.id).pipe(
    switchMap((id) => this.apiInfo.getTodos(id))
  );
  private users = toSignal(this.apiInfo.getUsers().pipe(shareReplay(1)));
  public todos = toSignal(this.todos$, { initialValue: [] as ITodo[] });

  public getUserName(id: number): string | undefined {
    return this.users()?.find((user) => user.id === id)?.name;
  }
}
