<script lang="ts">
  import { onMount } from 'svelte';
  import { getCharacters, type Character } from '$lib/data';
  let characters: Character[] = [];
  onMount(async () => {
    characters = await getCharacters();
  });
</script>

<h1>Character Codex</h1>
{#if characters.length === 0}
  <p>No characters yet.</p>
{:else}
  <ul>
    {#each characters as c}
      <li>{c.name} - {c.category} - {c.tier}</li>
    {/each}
  </ul>
{/if}
