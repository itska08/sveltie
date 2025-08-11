<script lang="ts">
  import { user } from '$lib/store';
  let { children } = $props();
</script>

<svelte:head>
  <style>
    :global(html, body) {
      background: #0d0d0d;
      color: #f5f5f5;
      margin: 0;
      font-family: 'Inter', system-ui, sans-serif;
      transition: background 0.3s, color 0.3s;
    }
    nav {
      background: #181818;
      padding: 1rem 2rem;
      display: flex;
      gap: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      animation: slideDown 0.4s ease;
    }
    a {
      color: #9cc9ff;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }
    a:hover {
      color: #cfe8ff;
    }
    main {
      padding: 2rem;
      animation: fadeIn 0.4s ease;
    }
    :global(input, select, button) {
      background: #1f1f1f;
      border: 1px solid #333;
      border-radius: 4px;
      padding: 0.5rem;
      color: #f5f5f5;
      font-family: inherit;
      transition: border-color 0.2s, transform 0.2s;
    }
    :global(input:focus, select:focus, button:hover) {
      border-color: #555;
    }
    :global(button) {
      cursor: pointer;
    }
    :global(button:hover) {
      transform: translateY(-2px);
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
  <a href="/">Home</a>
  <a href="/characters">Characters</a>
  <a href="/lightcones">Lightcones</a>
  <a href="/tier">Tier List</a>
  {#if $user}
    {#if $user.username === 'admin'}
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
