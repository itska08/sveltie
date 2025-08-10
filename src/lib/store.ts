import { writable } from 'svelte/store';
import { get, set, del } from 'idb-keyval';

export interface User {
  username: string;
}

export const user = writable<User | null>(null);

get<User>('user').then((value) => {
  if (value) user.set(value);
});

user.subscribe((value) => {
  if (value) {
    set('user', value);
  } else {
    del('user');
  }
});
