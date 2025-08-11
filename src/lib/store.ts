import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface User {
  username: string;
}

export const user = writable<User | null>(null);

if (browser) {
  import('idb-keyval').then(({ get, set, del }) => {
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
  });
}
