import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ApiInfo } from '../core/api-info';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, shareReplay } from 'rxjs';
import { IPost } from '../core/models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PostList {
  private postInformation = inject(ApiInfo);
  private posts$: Observable<IPost[]> = this.postInformation.getPosts();
  public posts = toSignal(this.posts$, { initialValue: [] as IPost[] });
  public activePost = signal<IPost>({} as IPost);
  public isDialogOpen = signal(false);
  private users = toSignal(
    this.postInformation.getUsers().pipe(shareReplay(1))
  );

  public openFullPost(post: IPost): void {
    this.isDialogOpen.set(true);
    this.activePost.set(post);
  }

  public getUserName(id: number): string | undefined {
    return this.users()?.find((user) => user.id === id)?.name;
  }
}
