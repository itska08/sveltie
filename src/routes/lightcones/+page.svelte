<script lang="ts">
  import { onMount } from 'svelte';
  import { getLightcones, type Lightcone } from '$lib/data';
  let cones: Lightcone[] = [];
  onMount(async () => {
    cones = await getLightcones();
  });
</script>

<h1>Lightcone Codex</h1>
{#if cones.length === 0}
  <p>No lightcones yet.</p>
{:else}
  <ul>
    {#each cones as c}
      <li>{c.name} - {c.rarity}★</li>
    {/each}
  </ul>
{/if}
