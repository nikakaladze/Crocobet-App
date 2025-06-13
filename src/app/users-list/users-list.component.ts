import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ApiInfo } from '../core/api-info';
import { toSignal } from '@angular/core/rxjs-interop';
import { IUser } from '../core/models';
import { FormsModule } from '@angular/forms';
import { UsersListFilter } from './users-list-filter';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, UsersListFilter, RouterLink],
})
export class UsersList {
  private users$ = inject(ApiInfo).getUsers();
  public users = toSignal(this.users$, { initialValue: [] as IUser[] });
  public searchValue: string = '';
}
