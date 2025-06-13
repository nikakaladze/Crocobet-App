import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, shareReplay, switchMap } from 'rxjs';
import { IPost } from '../core/models';
import { ApiInfo } from '../core/api-info';
import { PostCard } from '../post-card/post-card.component';

@Component({
  selector: 'app-post-cards',
  imports: [PostCard],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-cards.component.html',
  styleUrl: './post-cards.component.scss',
})
export class PostCards {
  private postInformation = inject(ApiInfo);
  public id = input<number>();
  private idToPosts$ = toObservable(this.id).pipe(
    filter((id) => id !== undefined),
    switchMap((id) => this.postInformation.getUserPosts(id))
  );
  public userPosts = toSignal(this.idToPosts$, {
    initialValue: [] as IPost[],
  });
  private users = toSignal(
    this.postInformation.getUsers().pipe(shareReplay(1))
  );
  public getUserName(id: number): string | undefined {
    return this.users()?.find((user) => user.id === id)?.name;
  }
}
