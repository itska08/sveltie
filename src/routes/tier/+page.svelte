<script lang="ts">
  import { onMount } from 'svelte';
  import { getTiered } from '$lib/data';
  let tiers: Record<string, Record<string, string[]>> = {};
  onMount(async () => {
    tiers = await getTiered();
  });
</script>

<h1>Tier List</h1>
{#each Object.entries(tiers) as [cat, t]}
  <h2>{cat}</h2>
  {#each Object.entries(t) as [tier, list]}
    {#if list.length}
      <h3>{tier}</h3>
      <ul>
        {#each list as name}
          <li>{name}</li>
        {/each}
      </ul>
    {/if}
  {/each}
{/each}
