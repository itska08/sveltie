<script lang="ts">
  import { user } from '$lib/store';
  import { goto } from '$app/navigation';
  let { children } = $props();
</script>

<svelte:head>
  <style>
9rv2y9-codex/fix-deployment-error-for-idb-keyval-import
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

    :global(body) {
      background: #0d0d0d;
      color: #f5f5f5;
      margin: 0;
      font-family: system-ui, sans-serif;
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
      transition: color 0.2s;
    }
    a:hover {
      color: #cfe8ff;
main
    }
    main {
      padding: 2rem;
      animation: fadeIn 0.4s ease;
    }
9rv2y9-codex/fix-deployment-error-for-idb-keyval-import

    :global(input, select, button) {
      background: #1f1f1f;
      border: 1px solid #333;
      border-radius: 4px;
      padding: 0.5rem;
      color: #f5f5f5;
      transition: border-color 0.2s, transform 0.2s;
    }
    :global(input:focus, select:focus, button:hover) {
      border-color: #555;
    }
    :global(button:hover) {
      transform: translateY(-2px);
    }
main
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
9rv2y9-codex/fix-deployment-error-for-idb-keyval-import
      <button type="button" onclick={() => goto('/admin')}>Admin</button>

      <a href="/admin">Admin</a>
main
    {/if}
    <button type="button" onclick={() => goto('/login')}>Logout</button>
  {:else}
    <button type="button" onclick={() => goto('/login')}>Login</button>
  {/if}
</nav>

<main>
  {@render children?.()}
</main>
