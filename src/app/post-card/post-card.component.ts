import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IPost } from '../core/models';

@Component({
  selector: 'app-post-card',
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCard {
  public post = input.required<IPost>();
  public userName = input.required<string | undefined>();
}
