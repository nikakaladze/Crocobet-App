import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost, ITodo, IUser } from './models';

@Injectable({
    providedIn: 'root',
})
export class ApiInfo {
    private apiUrl: string = 'https://jsonplaceholder.typicode.com';
    private http = inject(HttpClient);

    public getPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>(`${this.apiUrl}/posts`);
    }

    public getUserPosts(id: number): Observable<IPost[]> {
        const params = new HttpParams().append('userId', id);
        return this.http.get<IPost[]>(`${this.apiUrl}/posts`, {
            params,
        });
    }

    public getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${this.apiUrl}/users`);
    }

    public getTodos(id: number): Observable<ITodo[]> {
        const params = new HttpParams().append('userId', id);
        return this.http.get<ITodo[]>(`${this.apiUrl}/todos`, {
            params,
        });
    }
}
