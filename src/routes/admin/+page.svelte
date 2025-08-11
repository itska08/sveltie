<script lang="ts">
  import { user } from '$lib/store';
  import { addCharacter, addLightcone } from '$lib/data';
  let charName = '';
  let charCategory = 'DPS';
  let charTier = 'T0';
  let coneName = '';
  let coneRarity = '5';

  async function addChar() {
    await addCharacter({ name: charName, category: charCategory, tier: charTier });
    charName = '';
  }

  async function addCone() {
    await addLightcone({ name: coneName, rarity: coneRarity });
    coneName = '';
  }
</script>

{#if $user && $user.username === 'admin'}
  <h1>Admin Panel</h1>
  <h2>Add Character</h2>
  <input placeholder="name" bind:value={charName} />
  <select bind:value={charCategory}>
    <option>DPS</option>
    <option>Support DPS</option>
    <option>Amplifier</option>
    <option>Sustain</option>
  </select>
  <select bind:value={charTier}>
    <option>T0</option>
    <option>T0.5</option>
    <option>T1</option>
    <option>T2</option>
    <option>T3</option>
    <option>T4</option>
    <option>T5</option>
  </select>
  <button on:click={addChar}>Add</button>

  <h2>Add Lightcone</h2>
  <input placeholder="name" bind:value={coneName} />
  <select bind:value={coneRarity}>
    <option>5</option>
    <option>4</option>
    <option>3</option>
  </select>
  <button on:click={addCone}>Add</button>
{:else}
  <p>Not authorized.</p>
{/if}
