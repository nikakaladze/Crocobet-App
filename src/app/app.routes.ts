import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        pathMatch: 'full',
        path: 'posts',
        loadComponent: () =>
            import('./post-list/post-list.component').then((m) => m.PostList),
    },
    {
        pathMatch: 'full',
        path: 'posts/:id',
        loadComponent: () =>
            import('./post-cards/post-cards.component').then((m) => m.PostCards),
    },
    {
        pathMatch: 'full',
        path: 'users',
        loadComponent: () =>
            import('./users-list/users-list.component').then((m) => m.UsersList),
    },
    {
        pathMatch: 'full',
        path: 'todos/:id',
        loadComponent: () => import('./todos/todos.component').then((m) => m.Todos),
    },
    {
        pathMatch: 'full',
        path: '',
        redirectTo: 'posts',
    },
    {
        path: '**',
        redirectTo: '',
    },
];
