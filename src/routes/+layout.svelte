<script lang="ts">
  import { user } from '$lib/store';
  let { children } = $props();
</script>

<svelte:head>
  <style>
    :global(body) {
      background: #111;
      color: #eee;
      margin: 0;
      font-family: system-ui, sans-serif;
    }
    nav {
      background: #222;
      padding: 1rem;
      display: flex;
      gap: 1rem;
    }
    a {
      color: #9cf;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    main {
      padding: 1rem;
    }
  </style>
</svelte:head>

<nav>
  <a href="/">Home</a>
  <a href="/characters">Characters</a>
  <a href="/lightcones">Lightcones</a>
  <a href="/tier">Tier List</a>
  {#if $user}
    {#if $user.username === 'master'}
      <a href="/admin">Admin</a>
    {/if}
    <a href="/login">Logout</a>
  {:else}
    <a href="/login">Login</a>
  {/if}
</nav>

<main>
  {@render children?.()}
</main>
