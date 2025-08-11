<script lang="ts">
  import { user } from '$lib/store';
  import { goto } from '$app/navigation';
  let { children } = $props();
</script>

<svelte:head>
  <style>
    :global(html, body) {
      margin: 0;
      font-family: 'Roboto', system-ui, sans-serif;
      transition: background 0.3s, color 0.3s;
    }
    nav {
      padding: 1rem 2rem;
      display: flex;
      gap: 0.5rem;
      animation: slideDown 0.4s ease;
    }
    nav button {
      border-radius: 0.5rem;
    }
    main {
      padding: 2rem;
      animation: fadeIn 0.4s ease;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</svelte:head>

<nav>
  <button type="button" onclick={() => goto('/')}>Home</button>
  <button type="button" onclick={() => goto('/characters')}>Characters</button>
  <button type="button" onclick={() => goto('/lightcones')}>Lightcones</button>
  <button type="button" onclick={() => goto('/tier')}>Tier List</button>
  {#if $user}
    {#if $user.username === 'admin'}
      <button type="button" onclick={() => goto('/admin')}>Admin</button>
    {/if}
    <button type="button" onclick={() => goto('/login')}>Logout</button>
  {:else}
    <button type="button" onclick={() => goto('/login')}>Login</button>
  {/if}
</nav>

<main>
  {@render children?.()}
</main>
