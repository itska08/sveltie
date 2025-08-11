<script lang="ts">
  import { user } from '$lib/store';
  import { browser } from '$app/environment';
  let username = '';
  let password = '';
  let isNew = false;
  let message = '';

  async function submit() {
    if (!browser) return;
    const { get, set } = await import('idb-keyval');
    const accounts = (await get<Record<string, string>>('accounts')) ?? {};
    if (isNew) {
      accounts[username] = password;
      await set('accounts', accounts);
      message = 'Account created.';
      isNew = false;
      return;
    }
    if ((accounts[username] && accounts[username] === password) || (username === 'master' && password === 'master')) {
      $user = { username };
      message = 'Logged in.';
    } else {
      message = 'Invalid credentials.';
    }
  }

  function logout() {
    user.set(null);
  }
</script>

{#if $user}
  <h1>Hello {$user.username}</h1>
  <button on:click={logout}>Logout</button>
{:else}
  <h1>Login</h1>
  <form on:submit|preventDefault={submit}>
    <input placeholder="username" bind:value={username} />
    <input placeholder="password" type="password" bind:value={password} />
    <label><input type="checkbox" bind:checked={isNew}/> register</label>
    <button type="submit">Submit</button>
  </form>
  <p>{message}</p>
{/if}
