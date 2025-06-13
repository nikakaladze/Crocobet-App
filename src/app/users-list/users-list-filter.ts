import { Pipe } from '@angular/core';
import { IUser } from '../core/models';

@Pipe({
    name: 'filterUsers',
    standalone: true,
})
export class UsersListFilter {
    public transform(userList: IUser[], value: string): IUser[] {
        return userList.filter(
            (user) => user.name.includes(value) || user.email.includes(value)
        );
    }
}
